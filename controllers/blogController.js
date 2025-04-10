const Blog = require('../models/Blog');  // Assuming you'll create this model

// Get the homepage, displaying all blog posts
exports.getHomePage = async (req, res) => {
    try {
        // Fetch the latest posts (or all posts) from the database
        const posts = await Blog.find().sort({ createdAt: -1 });  // Sort by newest posts
        res.render('pages/index', { 
            title: 'Home - My Blog', 
            posts // Pass posts to the view
        });
    } catch (err) {
        console.error("Error fetching blog posts: ", err);
        res.status(500).render('error', { message: "Server Error", error: err });
    }
};

// Get a single blog post
exports.getBlogPost = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) return res.status(400).render('error', { message: "Invalid Post ID" });

        // Fetch a single post by its ID
        const post = await Blog.findById(id);
        
        if (!post) {
            return res.status(404).render('404', { message: "Post Not Found" }); // Handle missing post
        }

        res.render('pages/post', { 
            title: post.title, // Use post's title for the page title
            post  // Pass the single post to the view
        });
    } catch (err) {
        console.error("Error fetching blog post: ", err);
        res.status(500).render('error', { message: "Server Error", error: err });
    }
};
