// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     passwordHash: {
//         type: String,
//         required: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false,
//     },
//     street: {
//         type: String,
//         default: ''
//     },
//     apartment: {
//         type: String,
//         default: ''
//     },
//     zip :{
//         type: String,
//         default: ''
//     },
//     city: {
//         type: String,
//         default: ''
//     },
//     country: {
//         type: String,
//         default: ''
//     }

// });

// userSchema.virtual('id').get(function () { //its frontend friendly
//     return this._id.toHexString();
// });

// userSchema.set('toJSON', {
//     virtuals: true,
// });

// exports.User = mongoose.model('User', userSchema);
// exports.userSchema = userSchema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for users
const userSchema = new Schema({
  userType: {
       type: String,
        enum: ["vendor", "couple"],
         required: true },
  // Common fields for both vendors and couples
  fullName: { 
      type: String, 
      required: true },
  email: { 
      type: String,
       required: true },
  password: {
       type: String, 
       required: true },
  // Vendor specific fields
  companyName: { 
      type: String },
  category: {
       type: String },
  businessRegistrationNumber: { 
      type: String },
  country: { 
      type: String },
  address: {
       type: String },
  phoneNumber: {
       type: String },
  isAdmin:{
      type:Boolean,
      default:false,
  },
  // Couple specific fields
  groomFullName: { 
      type: String },
  brideFullName: { 
      type: String },
  brideDOB: { 
      type: Date },
  groomDOB: {
       type: Date },
  weddingDate: {
       type: Date },
  weddingLocation: {
       type: String },
});

userSchema.virtual('id').get(function () { //its frontend friendly
    return this._id.toHexString();
   });
   
   userSchema.set('toJSON', {
       virtuals: true,
    });

// Create model for user
 exports.User = mongoose.model('User', userSchema);
    exports.userSchema = userSchema;
// const User = mongoose.model("User", userSchema);

// module.exports = User;


    
    