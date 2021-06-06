const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const TransactionTypesSchema = new Schema( {
    type: [{ type: String, required: true }],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "transaction_types", TransactionTypesSchema );
