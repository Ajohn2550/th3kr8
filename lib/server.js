const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const loadRoutes = require('./load-routes');

const db = require('./db');
db.once('open', () => {
  console.log('Mongoose Connected');
});

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
loadRoutes(app);

exports = module.exports = function () {
  app.listen(config.get('express.port'));
  return app;
};
