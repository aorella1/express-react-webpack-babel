const express = require('express');
const path = require('path');
const app = express()
const axios = require("axios");

app.use(express.static(path.join(__dirname, '../', 'build')));
app.use(express.json())

app.get('/getAPIResponse', (req, res, next) => {
  console.log("'/test' call");
  axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => (response.data))
    .catch(err => next(err));
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

app.listen(9000);
