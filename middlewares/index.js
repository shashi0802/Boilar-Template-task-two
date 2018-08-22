var express = require('express')
var app = express()

console.log("Middleware partials route chech..!-------2")

app.use('*', require('./partials'))

console.log("this is middleware folder file----end-----7")

module.exports = app