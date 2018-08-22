
module.exports = function(app) {

  console.log("This route folder...entry!-----------1")

  app.use('/', require('../middlewares'))

  console.log("This route folder...check done middleware folder!-----8")

  console.log("route entry in home---9")
  app.use('/', require('./home'))
  console.log("This route folder...!home-----exit---11")

  console.log("this router index ))))))))))))))))))))))))))))))))))")

  console.log("This route folder...!")
}