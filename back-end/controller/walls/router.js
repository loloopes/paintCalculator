const express = require('express');
const post = require('./post');

const router = express.Router({ mergeParams: true });

router.post('/', post);

module.exports = router;
