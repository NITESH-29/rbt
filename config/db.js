'use strict';

var mongoose = require('mongoose');
/* DB */
var mongoose = require('mongoose');
require('../api/models/formDataModel')

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/Toucan');

mongoose.set('debug', true);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log('Database connection successful!');
});
