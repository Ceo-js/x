var path = require( "path" );

var productsController = {
    index: ( req, res ) => {
        res.sendFile( path.join( __dirname, "../views/products.html" ) );
    }
};





module.exports = productsController;