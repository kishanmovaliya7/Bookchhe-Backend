const Transaction = require('../../Model/TransactionModel');

const transferBalance = ( data ) => {
    const TransactionData = new Transaction(data)
    return TransactionData.save();
};

const FindAll = () => {
    return Transaction.find();
}

const FindByUser = (id) => {
    return Transaction.find({user_id: id});
}


module.exports = {
    transferBalance,
    FindAll,
    FindByUser
};
