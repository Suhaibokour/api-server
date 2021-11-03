'use strict';

const express = require( 'express' );
const cors = require( 'cors' );
const morgan = require( 'morgan' );

const notFoundHandler = require( './error-handlers/404.js' );
const errorHandler = require( './error-handlers/500.js' );
const logger = require ( './middleware/logger.js' );
const foodRoutes = require( './routes/food.js' );
const clothesRoutes = require( './routes/clothes.js' );

const app = express();
app.use( express.json() );
app.use( morgan( 'dev' ) );
app.use( cors() );
app.use( '/api/v1/food', foodRoutes );
app.use( '/api/v1/clothes', clothesRoutes );
app.use( logger );

app.get( '/',( req,res )=>{
  res.send( 'Hello World!!!' );
} );

app.use( '*', notFoundHandler );
app.use( errorHandler );

module.exports = {
  server: app,
  start: ( port ) => {
    const PORT = port || 4000;
    app.listen( PORT, () => console.log( `the server is up on ${PORT}` ) );
  },
};