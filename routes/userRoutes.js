const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update', authenticateToken, userController.updateProfile);

module.exports = router;