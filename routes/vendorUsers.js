// routes/vendorRoutes.js
const {Vendor} = require('../models/Vendor');
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
app.use(express.json());



// Create
// router.post('/', async (req, res) => {
//     try {
//         const vendor = new Vendor(req.body);
//         await vendor.save();
//         res.status(201).send(vendor);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });



// Create User Model
const User = mongoose.model('vendorUser', userSchema);

// API Endpoint for User Registration (Sign-up)
app.post('/api/signup/Vendor', async (req, res) => {
  try {
    const { username, email, userType } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create new user
    const newUser = new User({ username, email, userType });
    await newUser.save();
    res.status(201).json({ message: 'User registration successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Read
router.get('/:id', async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.id);
        if (!vendor) {
            return res.status(404).send();
        }
        res.send(vendor);
    } catch (err) {
        res.status(500).send();
    }
});

// Update
router.patch('/:id', async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vendor) {
            return res.status(404).send();
        }
        res.send(vendor);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const vendor = await Vendor.findByIdAndDelete(req.params.id);
        if (!vendor) {
            return res.status(404).send();
        }
        res.send(vendor);
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
