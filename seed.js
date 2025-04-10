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
        content: 'Exploring urban life after dark, the city transforms in ways you never expect. The bright neon lights illuminate the streets while the hustle of everyday life takes on a different pace. From the cool evening breeze to the sounds of distant traffic, the night provides a whole new perspective on the city I thought I knew so well. This is a journey of discovering hidden spots that only come alive after the sun sets.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'Coffee Chronicles',
        content: 'My quest for the perfect brew has been a long and exciting journey. From discovering the origins of beans to perfecting the art of brewing, every step has brought me closer to what I believe is the ultimate cup of coffee. I’ve experimented with different brewing methods — French press, espresso, pour-over — and each method brings out a unique flavor. Along the way, I’ve met baristas, fellow coffee enthusiasts, and learned the intricate details about sourcing and roasting coffee beans. The pursuit of the perfect brew is more than just about taste, it’s about passion, discovery, and community.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'Book Nook',
        content: 'As an avid reader, my book nook is my sanctuary. It’s a space where I escape the noise of the world and immerse myself in the fictional worlds I adore. In this corner of my home, I review my latest reads, share thoughts on characters that have stayed with me long after I’ve turned the last page, and explore different genres, from historical fiction to contemporary thrillers. Each book brings a new lesson, a new perspective, and a fresh world to explore. This series is dedicated to the books that have touched my soul and the ones I can’t wait to pick up next.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'DIY Dreams',
        content: 'Crafting has always been a passion of mine, and I’ve decided to turn that passion into projects that anyone can tackle. From simple home décor ideas to more complex furniture-building tutorials, DIY is all about creativity and resourcefulness. In this blog, I’ll share step-by-step guides for various projects, some of which I’ve made for my own home, and others that I’ve seen online and thought, “I can make that too!” Whether you’re a seasoned crafter or a beginner, these projects are designed to be fun, inspiring, and, most importantly, doable. Let’s get crafty!',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'Wanderlust Adventures',
        content: 'Traveling is more than just about visiting new places; it’s about experiencing new cultures, meeting people, and pushing yourself out of your comfort zone. My wanderlust adventures have taken me across continents, from the bustling streets of Tokyo to the tranquil beaches of Bali. Every trip brings new lessons, whether it’s navigating the streets of a foreign city or learning about the rich history of a place. This post shares my most memorable adventures, the moments that made me feel small in the vastness of the world, and the things I learned along the way.',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'The Art of Cooking',
        content: 'Cooking has always been a form of expression for me. There’s something magical about turning simple ingredients into a beautiful dish that not only tastes amazing but also tells a story. From experimenting with exotic spices to creating comforting dishes that remind me of home, cooking is an art that I love to practice every day. In this post, I share some of my favorite recipes, from quick weeknight meals to elaborate dinner parties. Let’s dive into the joy of cooking and the endless possibilities it offers!',
        image: 'https://st4.depositphotos.com/13194036/25616/i/450/depositphotos_256162250-stock-photo-cheerful-african-american-family-travel.jpg',
        date: new Date(),
      },
      {
        title: 'Sustainable Living',
        content: 'Living sustainably has become more important than ever. As a society, we are beginning to realize the impact of our daily actions on the environment, and making small changes can have a big effect. From reducing waste and conserving water to supporting eco-friendly brands, sustainable living is all about making choices that are better for our planet. In this post, I’ll explore different aspects of sustainable living, such as eco-friendly swaps, green energy solutions, and the importance of mindful consumption. Let’s work together to make the planet a better place for future generations.',
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
