var express = require('express');
var app = express();
var path = require('path');

var htmlPath = path.join(__dirname, 'frontend');
app.use(express.static(htmlPath));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.listen(8080, () => console.log('Example app listening on port 8080!'));
