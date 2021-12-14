const express = require('express');
const walls = require('./walls/router');

const root = express.Router();

root.use('/area', walls);

module.exports = root;
