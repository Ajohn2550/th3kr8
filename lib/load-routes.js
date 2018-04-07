const postApi = require('./routes/api/post');

exports = module.exports = (app) => {
  app.use(postApi.route, postApi.router);
};
