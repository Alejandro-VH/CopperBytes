const express = require('express');
const router = express.Router();

const { registerUser } = require('../controllers/auth.js');
router.post('/register', registerUser);
module.exports = router;
