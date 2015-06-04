/**
 * FarmersMarket2Controller
 *
 * @description :: Server-side logic for managing Farmersmarket2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var request = require('request');

 module.exports = {

  farmersMarketData: function(req,res){

    var zip = req.body.zip;

    request(('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=' + zip)
      ,function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(JSON.parse(body));
          console.log(body)
        } else {
          console.log ('not working');
        }
      })
  },

  farmersMarketFinalData: function(req,res){

    var marketId = req.body.marketId;

    request(('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + marketId)
     ,function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(JSON.parse(body));
        console.log(body)
      } else {
        console.log ('not working');
      }
    })

  }

  };