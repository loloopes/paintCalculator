const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.post('/ping', (req, res) => {
  console.log(req);
  return res.status(200).json({ message: 'Ok! Put!' });
});

app.listen(3001, () => console.log('server running on 3001!'));
