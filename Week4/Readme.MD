# SIT725 Week 4 Project

## Overview

This is a demo web application for SIT725 Week 4 practical. The project demonstrates the use of Materialize CSS framework, jQuery, Express.js, and MongoDB to build a dynamic web application with database integration. Users can view project cards fetched from a MongoDB database, interact with a modal form, and see dynamic UI updates.

## Features

- Responsive UI using Materialize CSS
- Interactive card with image and reveal section fetched from MongoDB database
- Modal form for user input (First Name, Last Name, Password, Email)
- Toast notifications on form submission
- Dynamic card rendering via JavaScript with API integration
- Express.js server with RESTful API endpoints
- MongoDB database integration with Mongoose ODM
- Database seeding functionality

## Technologies Used

- [Materialize CSS](https://materializecss.com/)
- [jQuery](https://jquery.com/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- HTML, CSS, JavaScript
- Node.js

## Project Structure

```
Week4/
├── server.js              # Express server setup with MongoDB integration
├── seed.js                # Database seeding script
├── package.json           # Project dependencies
├── package-lock.json      # Dependency lock file
├── public/
│   ├── css/
│   │   └── styles.css     # Custom styles
│   ├── images/            # Image assets
│   │   ├── kitten-4.jpg
│   │   ├── kitten1.webp
│   │   ├── kitten2.jpg
│   │   ├── kitten3.webp
│   │   ├── livedemo.png
│   │   └── personal.png
│   ├── js/
│   │   └── scripts.js     # Frontend scripts with API integration
│   └── index.html         # Main HTML page
└── Readme.MD              # Project documentation
```

## Setup Instructions

1. **Prerequisites**
   - Install [Node.js](https://nodejs.org/)
   - Install [MongoDB](https://www.mongodb.com/try/download/community) and ensure it's running on `localhost:27017`

2. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Week4
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Seed the database (optional)**
   ```bash
   node seed.js
   ```

5. **Run the server**
   ```bash
   npm start
   ```
   The app will run on [http://localhost:3004](http://localhost:3004) by default.

## Usage

- Open your browser and navigate to `http://localhost:3004`.
- Click the "Click Me" button to open the modal form.
- Fill in the form and click "SUBMIT" to see a toast notification.
- Explore the cards section for interactive content loaded from the MongoDB database.
- Project cards are dynamically fetched from the `/api/projects` endpoint.

## API Endpoints

- `GET /api/projects` - Fetch all projects from the database

## Database

The application uses MongoDB to store project data. Each project document contains:
- `title`: Project title
- `image`: Image path
- `link`: Project link description
- `description`: Project description

## Customization

- **Add more projects to database:** Run the seed script or add documents directly to MongoDB
- **Update project schema:** Modify the ProjectSchema in `server.js`
- **Change styles:** Edit `public/css/styles.css`
- **Modify server logic:** Update `server.js`
- **Add new API endpoints:** Extend the Express routes in `server.js`

## License

This project is licensed under the ISC License.

## Author

[Sophie Ngo](https://www.linkedin.com/in/callmesoffie/)

---

*For SIT725 Week 4 practical use only.*
