const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const PaymentTypesSchema = new Schema( {
    type: [{ type: String, required: true }],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "payment_types", PaymentTypesSchema );
