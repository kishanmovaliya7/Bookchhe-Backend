const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const ProductTypesSchema = new Schema( {
    type: [{ type: String, required: true }],
    max_days: [{ type: Number, required: true }],
    min_days: [{ type: Number, required: true }],
    created_time: { type: Date, required: true },
    updated_time: { type: Date, required: true },
}, {
    timestamps: true,
} );

module.exports = mongoose.model( "payment_types", ProductTypesSchema );
