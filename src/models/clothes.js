'use strict';

const mongoose = require( 'mongoose' );

const clothesSchema = new mongoose.Schema( {
  key: { type: String, required: true },
  type: { type: String },
} );

const ClothesModel = mongoose.model( 'Clothes', clothesSchema );

module.exports = ClothesModel ;