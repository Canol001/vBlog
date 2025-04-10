const express = require('express');
const router = express.Router();
const Post = require('../models/Post');  // Make sure the Post model is imported
const blogController = require('../controllers/blogController');

// Home route - display all blog posts
// router.get('/', blogController.getHomePage);
// Home route - display all blog posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().limit(4); // Get recent 4 posts
        console.log(posts);  // Log the posts for debugging
        res.render('pages/index', { posts }); // Explicitly reference 'pages/index.ejs'
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching posts kumbafuuuu");
    }
});


// Blog post route - display a single blog post
router.get('/post/:id', blogController.getBlogPost);

// Blog page (this could be a list of blog posts or a landing page)
router.get('/blog', (req, res) => {
    res.render('pages/blog', { title: 'Blog' });
});

// About page
router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About Us' });
});

// Contact page
router.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact Us' });
});

// Route for displaying individual post details
router.get('/post/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);  // Find post by ID
        if (!post) {
            return res.status(404).send("Post not found");
        }
        res.render('postDetail', { post });  // Render postDetail.ejs and pass the post data
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching post details");
    }
});

module.exports = router;


