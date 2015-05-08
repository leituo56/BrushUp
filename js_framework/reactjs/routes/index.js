var express = require('express');
var router = express.Router();
var fs = require('fs');

/**
 * GET comments
 */
router.get('/comments.json', function(req, res) {
  fs.readFile('data/comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

/**
 * Post new comment
 */
router.post('/comments.json', function(req, res) {
  fs.readFile('data/comments.json', function(err, data) {
    var comments = JSON.parse(data);
    comments.push(req.body);
    fs.writeFile('data/comments.json', JSON.stringify(comments, null, 4), function(err) {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.send(JSON.stringify(comments));
    });
  });
});

module.exports = router;
