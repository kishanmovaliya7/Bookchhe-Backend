let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema( {
    user_id: [{ type: String, required: true}],
    amount: [{ type: Number, required: true }],
    account_no: [{ type: Number, required: false}],
    ifsc_code: [{ type: String, required: false}],
    transaction_type_id: [{ type: String, required: true}]
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "Transaction", TransactionSchema );