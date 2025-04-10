// Run this once to seed the database
const mongoose = require('mongoose');
const Post = require('./models/Post');

mongoose.connect('mongodb+srv://canol:Test%40net@fooddb.k8qme.mongodb.net/foodDB?retryWrites=true&w=majority&appName=foodDB')
  .then(async () => {
    await Post.deleteMany({});
    await Post.insertMany([
      {
        title: 'City Lights',
        description: 'Exploring urban life after dark.',
        image: 'https://your-image-link.jpg'
      },
      {
        title: 'Coffee Chronicles',
        description: 'My quest for the perfect brew.',
        image: 'https://your-image-link.jpg'
      },
      {
        title: 'Book Nook',
        description: 'Reviews of my latest reads.',
        image: 'https://your-image-link.jpg'
      },
      {
        title: 'DIY Dreams',
        description: 'Crafting projects for beginners.',
        image: 'https://your-image-link.jpg'
      }
    ]);
    console.log("Seeded successfully");
    process.exit();
  });
