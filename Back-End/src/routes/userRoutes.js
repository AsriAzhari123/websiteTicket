const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user'); 

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

   
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email sudah pernah digunakan' });
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'Pengguna Berhasil Mendaftar', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Pengguna Gagal Mendaftar' });
    }
});


router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, '-password'); // Exclude password from results
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

module.exports = router;
