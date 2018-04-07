const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('mongodb'));
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

exports = module.exports = db;
