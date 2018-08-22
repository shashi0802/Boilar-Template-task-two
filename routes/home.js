var express = require('express')
var router = express.Router()

console.log("enter in home.js and looking modle---contentstack----10")
var Stack = require('../models/contentstack')


router.get('/', function (req, res) {
    console.log("router home call+++++++++++++++++++++++++++++++")
    var contentTypeUID = "home" 
    
    Stack.ContentType(contentTypeUID).Query()
        .toJSON()
        .find()
        .spread(function success(result) {
            res.render('home.html', {   
                entry: result[0],
            })
        }, function error(error) {
            next(error)
    })
})

module.exports = router