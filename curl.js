const request = require('request')

module.exports = function(site) {
  request(site , function(error, response, body){
    if(error) {
      throw error
    }
    console.log(body)
  })
}