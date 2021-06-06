const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const WalletSchema = new Schema( {
    user_id: [{ type: String, required: true }],
    withdrawl_balance: [{ type: Number, required: true }],
    balance: [{ type: Number, required: true}],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "review", WalletSchema );
