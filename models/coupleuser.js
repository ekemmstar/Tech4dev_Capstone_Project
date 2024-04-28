// models/Couple.js
const mongoose = require('mongoose');

const coupleSchema = new mongoose.Schema({
    userType:{
        type: Boolean,
        required:true,
    },
    groomFullName: { 
        type: String },
    brideFullName: { 
        type: String },
        
    emailAddress: { 
        type: String,
        required: true },
    // password: {
    //     type: String, 
    //     required: true },
    brideDOB: { 
        type: String },
    groomDOB: {
         type: String },
    weddingDate: {
         type: String },
    weddingLocation: {
         type: String },
  });
  

module.exports = mongoose.model('Couple', coupleSchema);
