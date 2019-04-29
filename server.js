'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));
app.use(cors());
app.get('/', (req, res) => res.send('Hello world!'));

const port = 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
