const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello Expresss!');
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
