const mongooes = require('mongooes');

const schema = mongooes.Schema;

let VerificationSchema = new schema({
    shop_id: [{type: String, required: true}],
    adhar_card: [{type: String, required: true}],
    pan_card: [{type: String, required: true}],
    light_bill: [{type: String, required: true}],
    address: [{type: String, required: true}],
    status: [{type: Boolean, required: true}],
    created_time: [{type: Date, required: true}],
    updated_time: [{type: Date, required: true}],
})

module.exports = mongooes.model('verification', VerificationSchema);