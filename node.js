// npms needed
/*
randomstring
dotenv
express

npm i randomstring
npm i dotenv
npm i express

*/

var Keys = [ // Keys listed here in a array
'daun1',
'3123Key',
'123Key',
'FREE'

]
require('dotenv').config()
var SecretNum = process.env['SecretNum']
var rayKey = process.env['rayKey']
var rayKey2 = process.env['rayKey2']


var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
var key = req.query.key
if (Keys.includes(key)) { } else { res.send(`Invalid Key`); return }
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
res.send(`${genstring() + '.' + (Buffer.from(key + rayKey + ((hours + ':' + minutes + ':' + seconds) + ':' + SecretNum) + rayKey2).toString('base64')) + '.' + genstring()}`)
})

function genstring() {
return require("randomstring").generate({ length: 20, charset: 'alphabetic' });
};

app.listen(port, () => console.log(`working!`));