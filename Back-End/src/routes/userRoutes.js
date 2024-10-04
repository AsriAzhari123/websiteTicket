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

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User
            .findOne({ username })
            .select('+password');

        if (!existingUser) {
            return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!passwordCorrect) {
            return res.status(401).json({ error: 'Password salah' });
        }

        res.json({ message: 'Login berhasil', user: existingUser });
    } catch (error) {
        res.status(500).json({ error: 'Login gagal' });
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}, '-password'); 
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

module.exports = router;
