const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('Hello world!'));

const port = 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
