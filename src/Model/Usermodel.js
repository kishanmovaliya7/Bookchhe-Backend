const mongoose = require( "mongoose" );
const md5 = require( "md5" );

const Schema = mongoose.Schema;

const userSchema = new Schema( {
    userName:       { type: String, required: true },
    firstName:      { type: String, required: true},
    lastName:       { type: String, required: true},
    email:          { type: String, required:true },
    password:       { type: String, required: true },
    profile_image:  { type: String, required:false },
    address:        { type: Array, required: false },
    currentLocation: { type: Object, required: true },
    phone_no:       { type: String, required:true },
    role_id:        { type: String, required:true },
    dob:            { type: Date, required:false },
    gender:         { type: String, required:true },
    status:         { type: Boolean, required:true, default: true },
    post:           [{ type: Schema.Types.ObjectId, ref: 'post' }]
}, {
    timestamps: true,
} );

userSchema.methods.setPass = function( password ) {
    this.password = md5( password );
};

userSchema.methods.checkPass = function( password ) {
    return this.password === md5( password );
};

module.exports = mongoose.model( "User", userSchema );
