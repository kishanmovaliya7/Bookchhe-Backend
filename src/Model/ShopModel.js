const mongooes = require('mongooes');

const schema = mongooes.Schema;

let ShopSchema = new schema({
    shop_name: [{type: String, required: true}],
    contact_no: [{type: String, required: true}],
    gst_no: [{type: String, required: true}],
    email: [{type: String, required: true}],
    address: [{type: String, required: true}],
    owner_name: [{type: String, required: true}],
    owner_contact_no: [{type: String, required: true}],
    product_type_id: [{type: String, required: true}],
    created_time: [{type: Date, required: true}],
    updated_time: [{type: Date, required: true}],
})

module.exports = mongooes.model('shop', ShopSchema);