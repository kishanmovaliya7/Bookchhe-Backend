const config = require( "./index" );
const mongoose = require( "mongoose" );

const serverConfig = require(`./environments/${process.env.NODE_ENV || "development"}.js`);

module.exports = function( app ) {
    mongoose.connect( serverConfig.mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    process.on( "SIGINT", cleanup );
    process.on( "SIGTERM", cleanup );
    process.on( "SIGHUP", cleanup );


    if ( app ) {
        app.set( "mongoose", mongoose );
    }
};

function cleanup( ) {
    mongoose.connection.close( function( ) {
        process.exit( 0 );
    } );
}
