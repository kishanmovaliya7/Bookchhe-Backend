const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const FeedbacksSchema = new Schema( {
    user_id: [{ type: String, required: true }],
    message: [{ type: String, required: true}],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "feedback", FeedbacksSchema );
