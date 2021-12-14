const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.get('/ping', (req, res) => res.status(200).json({ message: 'Pong!' }));

app.listen(3001, () => console.log('server running on 3001!'));
