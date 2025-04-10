blog-site/
│
├── public/                   # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/                   # EJS templates
│   ├── partials/            # Header, footer, navbar, etc.
│   ├── pages/               # Home, blog posts, about, contact
│   └── 404.ejs
│
├── routes/                  # Route files
│   └── blogRoutes.js
│
├── models/                  # Mongoose or MongoDB models
│   └── Blog.js
│
├── controllers/             # Functions for route logic
│   └── blogController.js
│
├── .env                     # Environment variables
├── .gitignore
├── app.js                   # Main server file
├── package.json
└── README.md
