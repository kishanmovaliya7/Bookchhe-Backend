const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const PaymentsSchema = new Schema( {
    payment_type_id: [{ type: String, required: true }],
    amount : { type: Number, required: true },
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "payments", PaymentsSchema );
