const express = require('express');
const cors = require('cors');
const error = require('../middleware/error');
const root = require('../controller/router');

const app = express();

app.use(express.json());
app.use(cors());
app.use(root);
// app.post('/ping', (req, res) => {
//   console.log(req);
//   return res.status(200).json(req.body);
// });
app.use(error);

app.listen(3001, () => console.log('server running on 3001!'));
