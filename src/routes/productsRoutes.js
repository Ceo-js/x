var express = require( "express" ),
    router = express.Router(),
    productsController = require( "../controllers/productsController" );


router.get( "/produtos", productsController.index );




module.exports = router; 