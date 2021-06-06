const repository = require( "./repository" );

exports.create = async( req, res ) => {
    try {
        const createdPost = await repository.insertPost(req.body );
        res.success(createdPost);
    } catch ( err ) {
        res.send( err );
    }
};

exports.update = async ( req, res ) => {
    try {
        const update = await repository.update( req.params.id , req.body );
        res.success(update);
    } catch ( err ) {
        res.send( err );
    }
};

exports.delete = async ( req, res ) => {
    try {
        const deleteRecord = await repository.deletePost( req.params.id , req.body );
        res.success(deleteRecord);
    } catch ( err ) {
        res.send( err );
    }
};
//
exports.list = async ( req, res ) => {
    try {
        let query = {};
        if (req.body) {
            query = req.body;
            query.isApprove = true;
        }
        const application = await repository.getPost(query);
        res.success( application );
    } catch ( err ) {
        res.send( err );
    }
};


exports.detail = async ( req, res ) => {
    try {
        const details = await repository.findPost( req.params.id );
        res.success( details );
    } catch ( err ) {
        res.send( err );
    }
};
