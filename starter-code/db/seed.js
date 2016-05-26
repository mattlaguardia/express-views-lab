var mongoose = require('mongoose');
var connect = mongoose.connect('mongodb://localhost/candies-app-demo');
var Quote = require('../models/Quote');
Quote.remove({}, function(err){
  if (err) {
    console.log("Error in seed.js file", err);
  }
});

var quotes = [
  {id: 1, quote:"Testing", author: "Matt"},
  {id: 2, quote:"Chewing Gum", author: "Blah"}
];

Quote.create(quotes, function(err, docs){
  if (err) {
    console.log("Error in the Quote.create part of seed.js");
  } else {
    console.log("Created: ", docs);
    mongoose.connection.close();
  }
});
