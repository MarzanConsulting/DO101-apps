
const express = require('express');
const app = express();


console.log("Hello World!");

const data = 'RE8xMDF4IGlzIGF3ZXNvbWUh';

console.log(Buffer.from(data, 'base64').toString("ascii"));

app.get('/', function (req, res) {
    res.send('Hello, World!\n');
});

app.get('/mars', function (req, res) {
    res.send('Hello, Mars!\n');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

module.exports = app;

