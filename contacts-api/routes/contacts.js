var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Contact = require('../models/Contact.js');

/* GET contacts listing. */
router.get('/', function(req, res, next) {
  Contact.find(function(err, contacts) {
    if (err) return next(err);
    res.json(contacts);
  });
});

module.exports = router;
