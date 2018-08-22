var Contentstack = require('contentstack')
var config = require('config')

var Stack = Contentstack.Stack(config.get('apikey'), config.get('accesstoken'), config.get('environment'))

console.log("middleware---partial-----model---contentstack---entry---4")

module.exports = Stack
