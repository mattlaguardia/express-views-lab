var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

//REQURE THE CONTROLLER //
var quotesController = require('../controllers/quotesController');

// QUOTES API
router.route('/quotes')
  .get(quotesController.getAll)
  .post(quotesController.createQuote);


router.route('/quotes/:id')
// GET RETURN SPECIFIT QUOTE //
  .get(quotesController.getQuote)
// PATCH UPDATE SPECIFIC QUOTE //
  .put(quotesController.updateQuote)
// DELETE REMOVE SPECIFIC QUOTE FROM DB //
  .delete(quotesController.removeQuote);

module.exports = router;
