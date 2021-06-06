const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const PostSchema = new Schema( {
    name: [{ type: String, required: true }],
    images : { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String, required: true },
    isApprove: { type: Boolean, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "post", PostSchema );
