var createError = require('http-errors');
var express = require('express');


var indexRouter = require('./getStatement');


var app = express();

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/statement', indexRouter);

module.exports = app;
