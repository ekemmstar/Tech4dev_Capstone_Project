// models/Vendor.js
const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    companyName: { 
        type: String },

    category: {
         type: String },

    businessRegistrationNumber: { 
        type: String },

    companyemail: { 
        type: String,
        required: true },

    password: {
        type: String, 
        required: true },

    confirmpassword: {
        type: String, 
        required: true },

        // Vendor specific fields
    country: { 
        type: String },

    address: {
         type: String },

    phoneNumber: {
         type: String },
         
    isAdmin:{
        type:Boolean,
        default:false,
    },    // Add other fields as needed
});

module.exports = mongoose.model('Vendor', vendorSchema);
