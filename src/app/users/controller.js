const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const extractObject = require("../../utilities/").extractObject;
const logger = require("../../utilities/logger");
const repository = require("./repository");
const Users = require('../../Model/Usermodel');

exports.getList = async (req, res) => {
    try {
        const users = await Users.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving login."});
    }
};

exports.register = async (req, res) => {
    try {
        const {username} = req.body;
        const user = await Users.find({username});
        if (user && user.length) {
            logger.error("User already exists");
            res.preconditionFailed("existing_user");
            return;
        }
        const savedUser = await repository.saveUser(req.body);
        res.success(extractObject(
            savedUser,
            ["id", "username"],
        ));
        res.status(200).send({savedUser});
    } catch (err) {
        res.send(err);
    }
};

exports.edit = async (req, res) => {
    try {
        const user = await repository.findUser(req.user.id);
        const editedUser = await repository.editUser(user, req.body);
        res.success(extractObject(
            editedUser,
            ["id", "username"],
        ));
    } catch (err) {
        res.send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        const user = await repository.findUser(req.user.id);
        const deletedUser = await repository.deleteUser(user, req.body);
        res.success(extractObject(
            deletedUser,
            ["id", "username"],
        ));
    } catch (err) {
        console.log(err);
        res.send(err);
    }
};

exports.create = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Users content can not be empty"
        });
    }
    const findUser = await Users.findOne({email: req.body.email});
    if(findUser && findUser._id){
        return res.send({message: "This user is already exist"});
    }
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    Users.create(req.body)
        .then(users => {
            res.send({users, message: "successfully inserted"});
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the users."
        });
    });
};

exports.login = (req, res) => {
    Users.findOne({email: req.body.email})
        .then(login => {
            const success = "Successfully Login";
            const isMatch = login.checkPass(req.body.password);
            if (isMatch) {
                let token = jwt.sign({_id: login._id, email: req.body.email}, "superSuperSecret", {
                    expiresIn: 3600
                });
                res.status(200).send({users: true, token: token, login: login,success :success});
            } else {
                res.status(500).send({message: "Password is not match"});
            }
        }).catch(err => {
            console.log(err)
        res.send({
            message: err.message || "Some error occurred while retrieving login."
        });
    });
};

exports.forgetPassword = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Users content can not be empty"
        });
    }
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bookchhe@gmail.com',
            pass: 'book@123'
        }
    });

    const userDetails = await Users.findOne({email: req.body.email})
    if (userDetails && userDetails._id) {
        let mailDetails = {
            from: 'bookchhe@gmail.com',
            to: req.body.email,
            subject: "Your Forgotton Password", // Subject line
            text: "Your Forgotton Password", // plain text body
            html: `<b>Hello you forgot Your password so below link is for reseting password click below.</b> <span>http://localhost:3000/newPassword/${userDetails._id}</span>` // html body
        };
        mailTransporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log('Error Occurs');
            } else {
                console.log('Email sent successfully');
                res.status(200).send({
                    message: "Email sent successfully"
                });
            }
        });
    }
};

exports.update = async ( req, res ) => {
    try {
        const data = req.body;
        if(!data && !data._id){
            return  res.send({message: "Plz send valid details"});
        }
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        await Users.updateOne({_id: data._id}, data);
        res.send({ok: true, message: "Updated"});
    } catch ( err ) {
        res.send( err );
    }
};

exports.changePassword = (req, res) => {
    const token = req.body.token || req.query.token || req.headers["authorization"];
    if (token) {
        return jwt.verify(token, "superSuperSecret", function (err, decoded) {
            if (err) {
                logger.error(err);
                return res.json({
                    success: false,
                    message: "Failed to authenticate token.",
                });
            } else {
                Users.findOne({_id: decoded._id})
                    .then(login => {
                        const isMatch = bcrypt.compareSync(req.body.password, login.password); // true
                        if (isMatch) {
                            req.body.new = bcrypt.hashSync(req.body.new, 8);
                            Users.findByIdAndUpdate({_id: decoded._id}, {$set: {password: req.body.new}})
                                .then(users => {
                                    return res.send(users);
                                }).catch(err => {
                                res.status(500).send({
                                    message: "The user is not available"
                                });
                            });
                        } else {
                            res.status(500).send({message: "your Current password is not match"});
                        }
                    });
            }
        })

    } else {
        return res.unauthorized();
    }
};

exports.updateStatus = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    Users.updateOne({_id: req.params.id}, {$set: {isActive: req.body.isActive}})
        .then(user => {
            if (!user) {
                res.status(404).send({
                    message: "Users not found with id " + req.params.id
                });
            } else {
                res.send({message: "Users deleted successfully!"});
            }
        })
        .catch(err => {
            console.log(err)
        });
};
