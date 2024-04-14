const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateAccessToken(email) {
  return jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
}

function verifyToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = { generateAccessToken, verifyToken };
