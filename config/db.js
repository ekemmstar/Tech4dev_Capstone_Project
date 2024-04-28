require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
exports.connectDb = async () => {
    try {
        const dbconnect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error");
    }
}
