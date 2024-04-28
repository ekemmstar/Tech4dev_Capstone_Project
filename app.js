const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// // const authJwt = require('./helpers/jwt');
// const errorHandler = require('./helpers/error-handler');
// const vendorRoutes = require('./routes/vendorRoutes');
// const coupleRoutes = require('./routes/coupleRoutes');


// app.use(cors());
// app.options('*', cors());


// const productsRouter = require('./routes/products');
const { connectDb } = require('./config/db');
const router = require('./routes/users');



// middleware
// app.use(bodyParser.json());
// app.use(morgan('tiny'));
// app.use(express.json());
// app.use(authJwt());
// app.use ('/public/uploads', express.static(__dirname + '/public/uploads'));
// app.use(errorHandler);





//Routers
// app.use(`${api}/products`, productsRouter) 
// const categoriesRoutes = require('./routes/categories');
// const productsRoutes = require('./routes/products');
// const usersRoutes = require('./routes/users');
// const ordersRoutes = require('./routes/orders');


// const api = process.env.API_URL;

// app.use(`${api}/categories`, categoriesRoutes); // its using this route that is coming from productsRouter
// app.use(`${api}/products`, productsRoutes);
// app.use(`${api}/users`, usersRoutes);
// app.use(`${api}/orders`, ordersRoutes);
// app.use(`${api}/vendors`, vendorRoutes);
// app.use(`${api}/couples`, coupleRoutes);

//Database
connectDb()
app.use(express.json())
app.use("/routes", router)
//Server
app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000')
})