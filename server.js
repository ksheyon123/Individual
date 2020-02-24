var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var static = require('serve-static');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Views template html -> ejs 설정
app.set('view engine', 'html');

//Router 설정
var mainRouter = require('./routers');

app.use(mainRouter);

app.listen(20001,'meipartners.xyz', () => {
    console.log('Page Connected');
});