// const controller = require( "./controller" );

const express = require( "express" );
const router = express.Router( );

const controller = require( "./controller" );

// Cut balance from customer account and add on seller account
router.post( "/transfer", controller.transfer );

// Get All transaction
router.get( "/", controller.findAll);

// Get Transaction By user id
router.get( "/:userid", controller.findByUser );




module.exports = router;
