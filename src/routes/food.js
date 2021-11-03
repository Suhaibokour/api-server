'use strict';

const express = require( 'express' );

const DataMngr = require ( '../models/dataMngr.js' );

const Food = require( '../models/food.js' );

const dataMngr = new DataMngr( Food );
const router = express.Router();

router.get( '/', getFood );
router.get( '/:id', getFoodWithId );
router.post( '/', createFood );
router.put( '/:id', updateFood );
router.delete( '/:id', deleteFood );

async function getFood( req, res, next ) {
  try {
    const resObj = await dataMngr.read();
    res.json( resObj );
  }catch( error ){
    next( error );
  }
}

async function getFoodWithId( req, res, next ) {
  try {
    const resObj = await dataMngr.read( req.params.id );
    res.json( resObj );
  } catch( error ){
    next( error );
  }
}

async function createFood( req, res, next ) {
  try{
    const foodObj = req.body;
    const resObj = await dataMngr.create( foodObj );
    res.status( 201 ).json( resObj );
  }catch( error ){
    next( error );
  }
}

async function updateFood( req, res, next ) {
  try {
    const foodObj = req.body;
    const resObj = await dataMngr.update( req.params.id, foodObj );
    res.json( resObj );
  }catch( error ){
    next( error );
  }
}

async function deleteFood( req, res, next ) {
  try {
    const resObj = await dataMngr.delete( req.params.id );
    res.json( resObj );
  }catch ( error ){
    next ( error );
  }
}

module.exports = router;