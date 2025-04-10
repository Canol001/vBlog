const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Home route - display all blog posts
router.get('/', blogController.getHomePage);

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

module.exports = router;
