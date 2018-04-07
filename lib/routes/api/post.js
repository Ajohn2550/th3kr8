/* eslint new-cap: warn */

const express = require('express');

const Post = require('../../models/post');

const router = express.Router();

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
    console.log(req.body);
    const newPost = new Post(req.body);
    newPost.save((err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  });

router.route('/:postId')
  .get((req, res) => {
    Post.findById(req.params.postId, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  })
  .put((req, res) => {
    console.log('Put for post: ' + req.params.postId);
    console.log(req.body);
    Post.findOneAndUpdate({ _id: req.params.postId }, req.body, (err, post) => {
      if (err) {
        res.send(err);
      }
      res.json(post);
    });
  })
  .delete((req, res) => {
    Post.findOneAndRemove(req.params.postId, (err) => {
      if (err) {
        res.send(err);
      }
      res.status(204).json({});
    });
  });

exports = module.exports = {
  route: '/api/v1/post',
  router: router
};
