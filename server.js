const express = require('express');
const app = express();

app.use(express.json());

port = 3000;

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
