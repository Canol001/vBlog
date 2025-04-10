const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
require('dotenv').config();  // To load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error: ", err));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(ejsLayouts);
app.set('layout', 'layout'); // Uses views/layout.ejs as the default layout

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Routes
const blogRoutes = require('./routes/blogRoutes');
app.use('/', blogRoutes);

// 404 Route
app.use((req, res, next) => {
    res.status(404).render('404');  // Render the 404 view
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});