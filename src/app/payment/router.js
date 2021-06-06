const controller = require( "./controller" );

const express = require( "express" );

const router = express.Router( );

// Add Balance in wallet
router.post( "/add", controller.payment );

// withdraw Balance from wallet
router.post( "/withdraw", controller.payment );

// Get All Payment
router.get( "/", controller.findAll );

// Get Payment by user id
router.get( "/userid", controller.findByUser);


module.exports = router;
