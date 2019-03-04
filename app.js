const express = require("express"),
        bodyParser = require("body-parser"),
        app = express();

//configuring app
app.use(bodyParser.json());