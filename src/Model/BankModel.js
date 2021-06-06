const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const BankSchema = new Schema( {
    user_id: [{ type: String, required: true }],
    shop_id: [{ type: String, required: false }],
    ac_no: [{ type: String, required: true }],
    ifsc_code: [{ type: String, required: true }],
    holder_name: [{ type: String, required: true }],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "bank", BankSchema );
