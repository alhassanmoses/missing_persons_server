// dependencies imports
const express = require("express");
const cors = require("cors");
//modules imports

//initializing express to app
const app = express();

//cors middleware
app.use(cors());

module.exports = app;
