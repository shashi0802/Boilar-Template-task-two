var async = require('async')

console.log("middleware---partial-----model---contentstack---3")

var Stack = require('../models/contentstack')

console.log("middleware---partial-----model---contentstack---end---5")

module.exports = function (req, res, next) {
		var contentTypes = ["header", "footer"]
		async.map(
			contentTypes,
			function (contentType, callback) {
				Stack.ContentType(contentType).Query()
				.toJSON()
				.find()
				.spread(function (result){
					callback(null, result[0])
				})			
			},
			function (error, success) {
				if (error) return next(error)
				res.locals.partials = {}
				contentTypes.forEach((key, result)=> res.locals.partials[key] = success[result])
				next()
			}
		)	
}

console.log("enside the partial file------end------6")