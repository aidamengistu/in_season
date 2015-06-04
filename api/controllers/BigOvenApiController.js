/**
 * BigOvenApiCtrlController
 *
 * @description :: Server-side logic for managing Bigovenapictrls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req,res){
    res.view('BigOven/index');
  }
};

