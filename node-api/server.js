const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const app = express();
//bando de dados

mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', 
{ useNewUrlParser: true });

app.use(express.json());

requireDir("./src/models");
    
app.use("/api", require("./src/routes"));

app.listen(3001);

//-------------------------
