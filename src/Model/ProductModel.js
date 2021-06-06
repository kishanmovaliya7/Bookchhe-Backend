const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const BankSchema = new Schema( {
    user_id: [{ type: String, required: true }],
    product_type_id: [{ type: String, required: true }],
    shop_id: [{ type: String, required: true }],
    name: [{ type: String, required: true }],
    description: [{ type: String, required: true }],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "bank", BankSchema );
