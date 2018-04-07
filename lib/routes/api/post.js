const express = require('express');

const Post = require('../../models/post');

const router = express.router();

router.route('/')
  .get((req, res) => {
    Post.find({}, (err, posts) => {
      if (err) {
        res.send(err);
      }
      res.json(posts);
    });
  })
  .post((req, res) => {
    const newPost = new Post(req.body);
    newPost.save((err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  });

exports = module.exports = {
  route: '/api/v1/post',
  router: router
};
