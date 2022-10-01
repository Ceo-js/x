let express = require( "express" ),
    app = express(),
    path = require( "path" ),
    indexRoutes = require( "./src/routes/indexRoutes" ),
    contatosRoutes = require( "./src/routes/contatosRoutes" ),
    productsRoutes = require( "./src/routes/productsRoutes" ),
    gate = 7879;



/* app.get( "/", ( req, res ) => {
    res.send( "oi" );
} ); */

app.use( express.static( "./src/public" ) );

app.get( "/", indexRoutes );
app.get( "/contatos", contatosRoutes );
app.get( "/produtos", productsRoutes );




/* [ aula ]
--------------------------------- */
// let produto = {
//     "tipoProduto" : null,
//     "preco" : null,
//     "quantidade" : null
// };

// app.get( "/produto/adicionar", ( req, res ) => {
//     res.send( produto );
// } );

// produto.tipoProduto =  "living";
// produto.preco = 1245;
// produto.quantidade = 300;

// app.post( "/produto/criar",  ( req, res  ) => {
//     res.send( produto );
// } );

// app.get( "/sendfile", ( req, res ) => {
//     res.sendFile( path.join( __dirname, "src/views/products.html" ) );
// } );

// app.get( "/contatos", ( q, r ) => {
//     r.send( "Contatos" );
// } );



/* [ listen ]
======================================= */
app.listen( gate, console.log( `===--- [ running ] ---===

live at: http://localhost:${ gate }

===--- [ running ] ---===` ) );