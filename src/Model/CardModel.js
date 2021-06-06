const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const CardSchema = new Schema( {
    user_id: [{ type: String, required: true }],
    card_number: [{ type: Number, required: true }],
    ex_month: [{ type: Number, required: true }],
    ex_year: [{ type: Number, required: true }],
    cvv: [{ type: Number, required: true }],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "card", CardSchema );
