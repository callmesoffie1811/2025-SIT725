# SIT725 Week 6 Project

## Overview

This is a web application for SIT725 Week 6 practical, focusing on **Test-Driven Development (TDD) with Mocha and Chai**. Building upon the MVC architecture from Week 5, this project implements comprehensive unit and integration testing using industry-standard testing frameworks. The application demonstrates proper testing methodologies for Node.js applications, including API testing, model validation, and service layer testing.

## Features

- **MVC Architecture**: Clean separation of concerns with Models, Views, Controllers, and Services
- **Comprehensive Testing Suite**: Unit and integration tests using Mocha and Chai
- **API Testing**: Complete test coverage for all REST endpoints
- **Model Testing**: Validation and schema testing for MongoDB models
- **Service Layer Testing**: Database operation and business logic testing
- **Test Coverage Reports**: Detailed coverage analysis with Istanbul/NYC
- **Continuous Integration Ready**: Test automation for CI/CD pipelines
- **Full CRUD Operations**: Create, Read, Update, and Delete projects via REST API
- **RESTful API Endpoints**: Complete set of HTTP methods (GET, POST, PUT, DELETE)
- **Responsive UI**: Modern interface using Materialize CSS framework
- **Database Integration**: MongoDB with Mongoose ODM for data persistence
- **Interactive Frontend**: Dynamic project cards with modal forms
- **Error Handling**: Proper HTTP status codes and error responses
- **Input Validation**: Server-side validation with comprehensive test coverage

## Technologies Used

### Core Technologies
- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Frontend Framework**: [Materialize CSS](https://materializecss.com/)
- **JavaScript Library**: [jQuery](https://jquery.com/)

### Testing Technologies
- **Testing Framework**: [Mocha](https://mochajs.org/) - JavaScript test framework
- **Assertion Library**: [Chai](https://www.chaijs.com/) - BDD/TDD assertion library
- **HTTP Testing**: [Chai-HTTP](https://www.chaijs.com/plugins/chai-http/) - HTTP integration testing
- **Test Coverage**: [NYC (Istanbul)](https://istanbul.js.org/) - Code coverage tool
- **Test Database**: [MongoDB Memory Server](https://github.com/nodkz/mongodb-memory-server) - In-memory MongoDB for testing

### Development Tools
- **Development Server**: [Nodemon](https://nodemon.io/) for auto-restart
- **Cross-Origin Resource Sharing**: [CORS](https://github.com/expressjs/cors)
- **Runtime**: Node.js

## Testing Architecture

The project implements a comprehensive testing strategy:

- **Unit Tests**: Individual component testing (models, services, utilities)
- **Integration Tests**: API endpoint and database integration testing
- **Test Database**: Isolated test environment using MongoDB Memory Server
- **Mocking**: Service and database mocking for isolated unit tests
- **Coverage Analysis**: Complete code coverage reporting
- **Test Data Management**: Fixtures and factories for consistent test data

## Project Structure

```
Week6/
├── server.js                    # Express server setup and configuration
├── seed.js                      # Database seeding script
├── package.json                 # Project dependencies and scripts
├── .mocharc.json               # Mocha configuration file
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
├── test/                        # Test directory
│   ├── setup.js                 # Test environment setup
│   ├── fixtures/                # Test data fixtures
│   │   └── projects.js          # Sample project data
│   ├── unit/                    # Unit tests
│   │   ├── models/
│   │   │   └── Project.test.js   # Project model tests
│   │   └── services/
│   │       └── projectServices.test.js # Service layer tests
│   └── integration/             # Integration tests
│       └── api/
│           └── projects.test.js  # API endpoint tests
├── coverage/                    # Test coverage reports (generated)
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
   cd Week6
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

4. **Run tests**
   ```bash
   # Run all tests
   npm test
   
   # Run tests with coverage
   npm run test:coverage
   
   # Run tests in watch mode
   npm run test:watch
   
   # Run only unit tests
   npm run test:unit
   
   # Run only integration tests
   npm run test:integration
   ```

5. **Seed the database (optional)**
   ```bash
   node seed.js
   ```

6. **Run the application**
   
   **Development mode** (with auto-restart):
   ```bash
   npm run dev
   ```
   
   **Production mode**:
   ```bash
   npm start
   ```

7. **Access the application**
   Open your browser and navigate to [http://localhost:3004](http://localhost:3004)

## Testing

### Test Structure

The testing suite is organized into unit and integration tests:

#### Unit Tests
- **Model Tests**: Validate schema, required fields, and model methods
- **Service Tests**: Test database operations and business logic
- **Controller Tests**: Test request handling and response formatting

#### Integration Tests
- **API Tests**: End-to-end testing of REST endpoints
- **Database Integration**: Test real database operations
- **Error Handling**: Validate error responses and status codes

### Test Examples

**Model Testing Example:**
```javascript
describe('Project Model', () => {
  it('should create a project with valid data', async () => {
    const projectData = {
      title: 'Test Project',
      description: 'Test Description',
      image: 'test.jpg',
      link: 'https://test.com'
    };
    const project = new Project(projectData);
    const savedProject = await project.save();
    
    expect(savedProject.title).to.equal('Test Project');
    expect(savedProject.description).to.equal('Test Description');
  });
});
```

**API Testing Example:**
```javascript
describe('Projects API', () => {
  it('should get all projects', (done) => {
    chai.request(app)
      .get('/api/projects')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});
```

### Running Tests

#### Available Test Scripts

- `npm test` - Run all tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode for development
- `npm run test:unit` - Run only unit tests
- `npm run test:integration` - Run only integration tests
- `npm run coverage:report` - Generate and open coverage report

#### Test Configuration

The project uses `.mocharc.json` for Mocha configuration:

```json
{
  "require": ["test/setup.js"],
  "timeout": 5000,
  "recursive": true,
  "reporter": "spec"
}
```

### Test Coverage

The project aims for high test coverage:

- **Statements**: >90%
- **Branches**: >85%
- **Functions**: >90%
- **Lines**: >90%

View coverage reports by running:
```bash
npm run test:coverage
open coverage/index.html
```

## API Endpoints

The application provides a complete RESTful API for project management:

| Method | Endpoint | Description | Request Body | Tests |
|--------|----------|-------------|--------------|-------|
| `GET` | `/api/projects` | Get all projects | None | ✅ |
| `GET` | `/api/projects/:id` | Get project by ID | None | ✅ |
| `POST` | `/api/projects` | Create new project | `{ title, image, link, description }` | ✅ |
| `PUT` | `/api/projects/:id` | Update project | `{ title, image, link, description }` | ✅ |
| `DELETE` | `/api/projects/:id` | Delete project | None | ✅ |

## Database Schema

The Project model contains the following fields with validation:

```javascript
{
  _id: ObjectId,           // Auto-generated MongoDB ID
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  image: {
    type: String,
    default: 'default.jpg'
  },
  link: {
    type: String,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Link must be a valid URL'
    }
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## Testing Best Practices

This project demonstrates several testing best practices:

1. **Test Isolation**: Each test runs independently with clean database state
2. **Descriptive Tests**: Clear test descriptions and assertions
3. **Test Data Management**: Consistent test fixtures and factories
4. **Error Testing**: Comprehensive error scenario coverage
5. **Performance Testing**: Response time and load testing
6. **Mocking**: Proper use of mocks and stubs for unit testing
7. **Coverage Goals**: Maintaining high code coverage standards

## Development

### Available Scripts

- `npm start` - Run the production server
- `npm run dev` - Run the development server with auto-restart
- `npm test` - Run all tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `node seed.js` - Populate database with sample data

### Environment Variables

- `PORT` - Server port (default: 3004)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://127.0.0.1:27017/myprojectDB)
- `TEST_MONGODB_URI` - Test database URI (default: mongodb://127.0.0.1:27017/myprojectDB_test)
- `NODE_ENV` - Environment (development/test/production)

## Continuous Integration

The project is ready for CI/CD integration with test automation:

```yaml
# Example GitHub Actions workflow
name: Test
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm test
      - run: npm run test:coverage
```

## Error Handling

Comprehensive error handling with tests:

- **400 Bad Request**: Missing required fields (tested)
- **404 Not Found**: Resource not found (tested)
- **422 Unprocessable Entity**: Validation errors (tested)
- **500 Internal Server Error**: Server errors (tested)

## License

This project is licensed under the ISC License.

## Author

[Sophie Ngo](https://www.linkedin.com/in/callmesoffie/)

---

*This project demonstrates Test-Driven Development principles and comprehensive testing strategies for SIT725 Week 6 practical.*
