'use strict';

const express = require( 'express' );

const DataMngr = require ( '../models/dataMngr.js' );

const Clothes = require( '../models/clothes.js' );

const dataMngr = new DataMngr( Clothes );
const router = express.Router();

router.get( '/', getClothes );
router.get( '/:id', getClothesWithId );
router.post( '/', createClothes );
router.put( '/:id', updateClothes );
router.delete( '/:id', deleteClothes );

async function getClothes( req, res, next ) {
  try {
    const resObj = await dataMngr.read();
    res.json( resObj );
  }catch ( error ) {
    next( error );
  }
}

async function getClothesWithId( req, res, next ) {
  try {
    const resObj = await dataMngr.read( req.params.id );
    res.json( resObj );
  }catch ( error ){
    next( error );
  }
}

async function createClothes( req, res, next ) {
  try {
    const clothesObj = req.body;
    const resObj = await dataMngr.create( clothesObj );
    res.status( 201 ).json( resObj );
  }catch ( error ){
    next( error );
  }
}

async function updateClothes( req, res, next ) {
  try {
    const clothesObj = req.body;
    const resObj = await dataMngr.update( req.params.id, clothesObj );
    res.json( resObj );
  }catch( error ){
    next( error );
  }
}

async function deleteClothes( req, res, next ) {
  try {
    const resObj = await dataMngr.delete( req.params.id );
    res.json( resObj );
  }catch ( error ){
    next ( error );
  }
}

module.exports = router;