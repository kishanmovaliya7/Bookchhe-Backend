const repository = require("./repository");

const Users = require('../../Model/Usermodel')

exports.transfer = async (req, res) => {
  try {
    const {user_id} = req.body;
    const user = await Users.findOne({_id: user_id});
    if (!user || !user.length) {
       return res.status(400).send({message:"User is not exist"});
    } else {
      const savedUser = await repository.transferBalance(req.body);
     return res.status(200).send({_id: savedUser._id})
    }
  } catch (err) {
      res.send(err);
  }
};

exports.findAll = async (req, res) => {
  try {
    const Transactions = await repository.FindAll();
    res.status(200).send({message: "Success", data: Transactions})
  } catch (err) {
      res.send(err);
  }
};

exports.findByUser = async (req, res) => {
  try {
    let userID = req.params.userid;
    const Transactions = await repository.FindByUser(userID);
    res.status(200).send({message: "Success", data: Transactions})
  } catch (err) {
      res.send(err);
  }
};