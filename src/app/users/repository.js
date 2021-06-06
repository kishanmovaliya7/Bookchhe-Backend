const User = require( "../../Model/Usermodel" );

const saveUser = ( data ) => {
    const user = new User( data );
    user.setPass( data.password );
    console.log(user)
    return user.save();
};

const editUser = ( user, data ) => {
    const { firstName, lastName, email, address, currentLocation } = data;
    const currentUser = user;

    currentUser.firstName = firstName;
    currentUser.lastName = lastName;
    currentUser.email = email;
    currentUser.address = address;
    currentUser.currentLocation = currentLocation;
    return user.save( );
};

const deleteUser = ( user ) => user.remove();

const findUser = ( id ) => User.findOne( { id } );

module.exports = {
    saveUser,
    editUser,
    deleteUser,
    findUser,
};
