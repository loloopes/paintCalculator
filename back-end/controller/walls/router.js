const express = require('express');
const post = require('./post');
const wallChecker = require('../../middleware/wallChecker');

const router = express.Router({ mergeParams: true });

router.post('/', wallChecker, post);

module.exports = router;
