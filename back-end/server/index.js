/* eslint-disable global-require */
const express = require('express');
const cors = require('cors');
const error = require('../middleware/error');
const root = require('../controller/router');
require('dotenv').config({ path: require('find-config')('.env') });

const app = express();
const PORT = process.env.BACK_PORT;

app.use(express.json());
app.use(cors());
app.use(root);
app.use(error);

app.listen(PORT, () => console.log(`server running on ${PORT}!`));
