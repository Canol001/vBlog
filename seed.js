const mongoose = require('mongoose');
const Post = require('./models/Post');  // Adjust the path if necessary

// MongoDB connection string
mongoose.connect('mongodb+srv://canol:Test%40net@fooddb.k8qme.mongodb.net/foodDB?retryWrites=true&w=majority&appName=foodDB')
  .then(async () => {
    // Clear existing posts
    await Post.deleteMany({});

    // Insert new posts with updated schema fields
    await Post.insertMany([
      {
        title: 'City Lights',
        content: 'Exploring urban life after dark.',  // Replace description with content
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),  // You can set a specific date or use the current date
      },
      {
        title: 'Coffee Chronicles',
        content: 'My quest for the perfect brew.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'Book Nook',
        content: 'Reviews of my latest reads.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'DIY Dreams',
        content: 'Crafting projects for beginners.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      }
    ]);

    console.log("Seeded successfully");
    process.exit(); // Close the process after seeding
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    process.exit(1); // Exit with error code if seeding fails
  });
