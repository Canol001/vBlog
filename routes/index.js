const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().limit(4); // Get recent 4 posts
    res.render('index', { posts });
  } catch (error) {
    res.status(500).send("Error fetching posts");
  }
});

module.exports = router;
