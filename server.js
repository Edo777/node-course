var express = require("express");
var app = express();
var fs = require("fs");

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listen to ${port}`)
})