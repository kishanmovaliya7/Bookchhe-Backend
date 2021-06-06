const Payment = require('../../Model/PaymentsModel');

const findUser = ( data ) => {
    const user = data.username;
    return User.findOne( { username: user } );
};

const savePayment = () => {
    const PaymentData = new Payment(data)
    return PaymentData.save();
}

const findAllPayment = () => {
    return Payment.find();
    
}

const findByUserId = (id) => {
    return Payment.find( { user_id: id } );
}



module.exports = {
    findUser,
    findByUserId,
    findAllPayment,
    savePayment
};
