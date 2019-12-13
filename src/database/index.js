const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/apirest', {useNewUrlParser: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;