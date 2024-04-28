// routes/coupleRoutes.js
const express = require('express');
const router = express.Router();
const Couple = require('../models/Couple');

// Create
router.post('/', async (req, res) => {
    try {
        const couple = new Couple(req.body);
        await couple.save();
        res.status(201).send(couple);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Read
router.get('/:id', async (req, res) => {
    try {
        const couple = await Couple.findById(req.params.id);
        if (!couple) {
            return res.status(404).send();
        }
        res.send(couple);
    } catch (err) {
        res.status(500).send();
    }
});

// Update
router.patch('/:id', async (req, res) => {
    try {
        const couple = await Couple.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!couple) {
            return res.status(404).send();
        }
        res.send(couple);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const couple = await Couple.findByIdAndDelete(req.params.id);
        if (!couple) {
            return res.status(404).send();
        }
        res.send(couple);
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
