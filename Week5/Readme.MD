# SIT725 Week 5 Project

## Overview

This is a web application for SIT725 Week 5 practical, demonstrating the **MVC (Model-View-Controller) architectural pattern**. The project refactors the previous week's code into a proper MVC structure, separating concerns into models, views, controllers, and services. This application features a complete CRUD (Create, Read, Update, Delete) REST API for project management, with a responsive frontend using Materialize CSS framework.

## Features

- **MVC Architecture**: Clean separation of concerns with Models, Views, Controllers, and Services
- **Full CRUD Operations**: Create, Read, Update, and Delete projects via REST API
- **RESTful API Endpoints**: Complete set of HTTP methods (GET, POST, PUT, DELETE)
- **Responsive UI**: Modern interface using Materialize CSS framework
- **Database Integration**: MongoDB with Mongoose ODM for data persistence
- **Interactive Frontend**: Dynamic project cards with modal forms
- **Error Handling**: Proper HTTP status codes and error responses
- **Input Validation**: Server-side validation for required fields
- **Database Seeding**: Script to populate initial data

## Technologies Used

- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Frontend Framework**: [Materialize CSS](https://materializecss.com/)
- **JavaScript Library**: [jQuery](https://jquery.com/)
- **Development Tools**: [Nodemon](https://nodemon.io/) for auto-restart
- **Cross-Origin Resource Sharing**: [CORS](https://github.com/expressjs/cors)
- **Runtime**: Node.js

## MVC Architecture

This project follows the Model-View-Controller pattern:

- **Models** (`models/`): Data structure and database schema
- **Views** (`public/`): Frontend HTML, CSS, and JavaScript
- **Controllers** (`controllers/`): Business logic and request handling
- **Services** (`services/`): Data access layer and database operations
- **Routes** (`routes/`): API endpoint definitions

## Project Structure

```
Week5/
├── server.js                    # Express server setup and configuration
├── seed.js                      # Database seeding script
├── package.json                 # Project dependencies and scripts
├── test-require.js              # Testing utility
├── controllers/
│   ├── index.js                 # Controller exports
│   └── projectController.js     # Project CRUD operations controller
├── models/
│   └── Project.js               # Mongoose project schema model
├── services/
│   ├── index.js                 # Service exports
│   └── projectServices.js       # Database service layer
├── routes/
│   └── projects.js              # Project API route definitions
├── public/
│   ├── index.html               # Main frontend page
│   ├── css/
│   │   └── styles.css           # Custom styles
│   ├── js/
│   │   └── scripts.js           # Frontend JavaScript and API calls
│   └── images/                  # Static image assets
│       ├── kitten-4.jpg
│       ├── kitten1.webp
│       ├── kitten2.jpg
│       ├── kitten3.webp
│       ├── livedemo.png
│       └── personal.png
└── Readme.MD                    # Project documentation
```

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running on `localhost:27017`

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Week5
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Ensure MongoDB is running on your system:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb/brew/mongodb-community
   
   # On Windows/Linux
   mongod
   ```

4. **Seed the database (optional)**
   ```bash
   node seed.js
   ```

5. **Run the application**
   
   **Development mode** (with auto-restart):
   ```bash
   npm run dev
   ```
   
   **Production mode**:
   ```bash
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to [http://localhost:3004](http://localhost:3004)

## API Endpoints

The application provides a complete RESTful API for project management:

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/projects` | Get all projects | None |
| `GET` | `/api/projects/:id` | Get project by ID | None |
| `POST` | `/api/projects` | Create new project | `{ title, image, link, description }` |
| `PUT` | `/api/projects/:id` | Update project | `{ title, image, link, description }` |
| `DELETE` | `/api/projects/:id` | Delete project | None |

### Example API Usage

**Create a new project:**
```bash
curl -X POST http://localhost:3004/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"My Project","image":"image.jpg","link":"https://example.com","description":"Project description"}'
```

**Get all projects:**
```bash
curl http://localhost:3004/api/projects
```

## Database Schema

The Project model contains the following fields:

```javascript
{
  _id: ObjectId,           // Auto-generated MongoDB ID
  title: String,           // Project title (required)
  image: String,           // Image file path or URL
  link: String,            // Project link or URL
  description: String,     // Project description
  __v: Number             // Version key (MongoDB)
}
```

## Usage

1. **View Projects**: The homepage displays all projects in an interactive card layout
2. **Add Project**: Use the modal form to create new projects
3. **Edit Project**: Click on project cards to edit existing projects
4. **Delete Project**: Remove projects through the interface
5. **Real-time Updates**: The frontend automatically updates when data changes

## Development

### Available Scripts

- `npm start` - Run the production server
- `npm run dev` - Run the development server with auto-restart
- `node seed.js` - Populate database with sample data

### Environment Variables

You can customize the application using environment variables:

- `PORT` - Server port (default: 3004)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://127.0.0.1:27017/myprojectDB)

## Error Handling

The application includes comprehensive error handling:

- **400 Bad Request**: Missing required fields
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server errors

## Testing

The project includes a test utility file (`test-require.js`) for testing module requirements and dependencies.

## Customization

- **Add new fields**: Update the Project model in `models/Project.js`
- **Modify API endpoints**: Edit routes in `routes/projects.js`
- **Change business logic**: Update controllers in `controllers/projectController.js`
- **Database operations**: Modify services in `services/projectServices.js`
- **Frontend styling**: Edit `public/css/styles.css`
- **Frontend functionality**: Update `public/js/scripts.js`

## License

This project is licensed under the ISC License.

## Author

[Sophie Ngo](https://www.linkedin.com/in/callmesoffie/)

---

*This project demonstrates MVC architecture principles for SIT725 Week 5 practical.*
