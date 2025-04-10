const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {  // New field for image URL or path
        type: String,
        required: false // You can make this required or optional
    }
});

module.exports = mongoose.model('Post', postSchema);
