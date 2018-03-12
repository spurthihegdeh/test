//import { Binary } from '../../../Users/sujithgs/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

// import { Binary } from '../../../Users/sujithgs/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';


var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var imageSchema = mongoose.Schema({
    path: {
    type: String,
    required: true,
    trim: true
    },
    originalname: {
    type: String,
    required: true
    }
    
   });

   
var nameSchema = new mongoose.Schema({
    name: String,
    Description: String,
    logo: imageSchema,
    Domain: String,
    Runtime: String,
    ICLevel: String,
    place: String,
    latitude: Number,
    longitude: Number
   });

   var Customer = mongoose.model('customer',nameSchema);

   module.exports = Customer;
