var express = require( "express" ),
    router = express.Router(),
    contatosController = require( "../controllers/contatosController" );


router.get( "/contatos", contatosController.index );




module.exports = router; 