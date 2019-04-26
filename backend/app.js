const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(8081, () => {
  console.log('App is running at http://localhost:8081');
});

