# SIT725 Week 7 Project

## Overview

This is a web application for SIT725 Week 7 practical, focusing on **Real-time Communication with Socket.io**. Building upon the comprehensive Test-Driven Development (TDD) foundation from Week 6, this project implements real-time bidirectional communication between clients and server using Socket.io. The application demonstrates real-time features including live updates, instant messaging, collaborative editing, and real-time notifications while maintaining robust testing practices for both traditional HTTP APIs and Socket.io connections.

## Features

### Real-time Communication
- **Socket.io Integration**: Bidirectional real-time communication between client and server
- **Live Project Updates**: Real-time synchronization of project data across all connected clients
- **Instant Messaging**: Real-time chat functionality with message broadcasting
- **Real-time Notifications**: Live alerts for project creation, updates, and deletions
- **Connection Management**: Automatic reconnection and connection status monitoring
- **Room-based Communication**: Organized real-time communication channels
- **Live User Presence**: Real-time display of connected users and their activities
- **Event Broadcasting**: Custom event handling for various real-time interactions

### Core Architecture (From Week 6)
- **MVC Architecture**: Clean separation of concerns with Models, Views, Controllers, and Services
- **Comprehensive Testing Suite**: Unit and integration tests using Mocha and Chai
- **Socket.io Testing**: Real-time communication testing with specialized Socket.io test tools
- **API Testing**: Complete test coverage for all REST endpoints and Socket events
- **Model Testing**: Validation and schema testing for MongoDB models
- **Service Layer Testing**: Database operation and business logic testing
- **Test Coverage Reports**: Detailed coverage analysis with Istanbul/NYC
- **Continuous Integration Ready**: Test automation for CI/CD pipelines including Socket.io tests

### Application Features
- **Full CRUD Operations**: Create, Read, Update, and Delete projects via REST API and real-time updates
- **RESTful API Endpoints**: Complete set of HTTP methods (GET, POST, PUT, DELETE)
- **Real-time UI Updates**: Dynamic interface updates without page refresh
- **Responsive UI**: Modern interface using Materialize CSS framework with real-time enhancements
- **Database Integration**: MongoDB with Mongoose ODM for data persistence
- **Interactive Frontend**: Dynamic project cards with modal forms and live updates
- **Error Handling**: Proper HTTP status codes and real-time error broadcasting
- **Input Validation**: Server-side validation with comprehensive test coverage

## Technologies Used

### Real-time Technologies
- **Real-time Communication**: [Socket.io](https://socket.io/) - Real-time bidirectional event-based communication
- **Socket.io Client**: [Socket.io Client](https://socket.io/docs/v4/client-api/) - Client-side Socket.io library
- **Real-time Testing**: [Socket.io Client for Testing](https://socket.io/docs/v4/testing/) - Socket.io testing utilities

### Core Technologies
- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)
- **Frontend Framework**: [Materialize CSS](https://materializecss.com/)
- **JavaScript Library**: [jQuery](https://jquery.com/)

### Testing Technologies
- **Testing Framework**: [Mocha](https://mochajs.org/) - JavaScript test framework
- **Assertion Library**: [Chai](https://www.chaijs.com/) - BDD/TDD assertion library
- **HTTP Testing**: [Chai-HTTP](https://www.chaijs.com/plugins/chai-http/) - HTTP integration testing
- **Socket.io Testing**: Custom Socket.io test utilities for real-time communication testing
- **Test Coverage**: [NYC (Istanbul)](https://istanbul.js.org/) - Code coverage tool
- **Test Database**: [MongoDB Memory Server](https://github.com/nodkz/mongodb-memory-server) - In-memory MongoDB for testing

### Development Tools
- **Development Server**: [Nodemon](https://nodemon.io/) for auto-restart
- **Cross-Origin Resource Sharing**: [CORS](https://github.com/expressjs/cors)
- **Runtime**: Node.js

## Real-time Architecture

The project implements a comprehensive real-time communication strategy:

### Socket.io Implementation
- **Event-based Communication**: Custom events for different real-time interactions
- **Room Management**: Organized communication channels for different features
- **Connection Handling**: Robust connection/disconnection management
- **Error Broadcasting**: Real-time error handling and user feedback
- **Data Synchronization**: Automatic data sync across all connected clients

### Real-time Features
- **Live Project Feed**: Real-time updates when projects are added, updated, or deleted
- **Instant Chat**: Real-time messaging system with message history
- **User Presence**: Live indication of connected users and their activities
- **Collaborative Elements**: Real-time collaborative features for project management
- **Live Notifications**: Instant alerts for various system events

### Testing Real-time Features
- **Socket.io Unit Tests**: Testing individual Socket.io event handlers
- **Real-time Integration Tests**: End-to-end testing of Socket.io communication
- **Connection Testing**: Testing connection/disconnection scenarios
- **Event Testing**: Comprehensive testing of custom Socket.io events
- **Performance Testing**: Real-time communication performance analysis

## Project Structure

```
Week7/
├── server.js                    # Express server with Socket.io setup
├── seed.js                      # Database seeding script
├── package.json                 # Project dependencies and scripts
├── .mocharc.json               # Mocha configuration file
├── controllers/
│   ├── index.js                 # Controller exports
│   └── projectController.js     # Project CRUD operations controller
├── models/
│   ├── Project.js               # Mongoose project schema model
│   └── Message.js               # Message model for chat functionality
├── services/
│   ├── index.js                 # Service exports
│   ├── projectServices.js       # Database service layer
│   └── socketServices.js        # Socket.io service layer
├── routes/
│   └── projects.js              # Project API route definitions
├── sockets/
│   ├── index.js                 # Socket.io exports and setup
│   ├── projectEvents.js         # Project-related Socket.io events
│   ├── chatEvents.js            # Chat-related Socket.io events
│   └── connectionEvents.js      # Connection management events
├── test/                        # Test directory
│   ├── setup.js                 # Test environment setup
│   ├── fixtures/                # Test data fixtures
│   │   ├── projects.js          # Sample project data
│   │   └── messages.js          # Sample message data
│   ├── unit/                    # Unit tests
│   │   ├── models/
│   │   │   ├── Project.test.js   # Project model tests
│   │   │   └── Message.test.js   # Message model tests
│   │   ├── services/
│   │   │   ├── projectServices.test.js # Service layer tests
│   │   │   └── socketServices.test.js  # Socket service tests
│   │   └── sockets/
│   │       ├── projectEvents.test.js   # Project Socket events tests
│   │       └── chatEvents.test.js      # Chat Socket events tests
│   └── integration/             # Integration tests
│       ├── api/
│       │   └── projects.test.js  # API endpoint tests
│       └── sockets/
│           ├── realtime.test.js  # Real-time communication tests
│           └── chat.test.js      # Chat functionality tests
├── coverage/                    # Test coverage reports (generated)
├── public/
│   ├── index.html               # Main frontend page with Socket.io integration
│   ├── css/
│   │   └── styles.css           # Custom styles with real-time UI enhancements
│   ├── js/
│   │   ├── scripts.js           # Frontend JavaScript and API calls
│   │   ├── socket-client.js     # Socket.io client-side implementation
│   │   └── real-time-ui.js      # Real-time UI update handlers
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
   cd Week7
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

4. **Run tests (including Socket.io tests)**
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
   
   # Run only Socket.io tests
   npm run test:sockets
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
   
   **Test real-time features**: Open multiple browser tabs to see real-time synchronization

## Socket.io Implementation

### Server-side Events

```javascript
// Project real-time events
io.on('connection', (socket) => {
  // Join project room
  socket.on('join-projects', () => {
    socket.join('projects-room');
  });
  
  // Broadcast new project
  socket.on('project-created', (project) => {
    socket.broadcast.to('projects-room').emit('new-project', project);
  });
  
  // Broadcast project updates
  socket.on('project-updated', (project) => {
    socket.broadcast.to('projects-room').emit('project-changed', project);
  });
  
  // Broadcast project deletion
  socket.on('project-deleted', (projectId) => {
    socket.broadcast.to('projects-room').emit('project-removed', projectId);
  });
});
```

### Client-side Usage

```javascript
// Initialize Socket.io connection
const socket = io();

// Join projects room
socket.emit('join-projects');

// Listen for real-time updates
socket.on('new-project', (project) => {
  addProjectToUI(project);
  showNotification('New project added!');
});

socket.on('project-changed', (project) => {
  updateProjectInUI(project);
  showNotification('Project updated!');
});

socket.on('project-removed', (projectId) => {
  removeProjectFromUI(projectId);
  showNotification('Project deleted!');
});
```

## Testing Socket.io

### Socket.io Testing Examples

**Event Testing:**
```javascript
describe('Socket.io Events', () => {
  let clientSocket;
  let serverSocket;

  beforeEach((done) => {
    // Setup test Socket.io connections
    server.listen(() => {
      const port = server.address().port;
      clientSocket = io(`http://localhost:${port}`);
      server.on('connection', (socket) => {
        serverSocket = socket;
      });
      clientSocket.on('connect', done);
    });
  });

  it('should broadcast new project to other clients', (done) => {
    const testProject = { title: 'Test Project', description: 'Test' };
    
    clientSocket.on('new-project', (project) => {
      expect(project.title).to.equal('Test Project');
      done();
    });
    
    serverSocket.emit('new-project', testProject);
  });
});
```

**Real-time Integration Testing:**
```javascript
describe('Real-time Project Updates', () => {
  it('should sync project creation across clients', (done) => {
    const client1 = io('http://localhost:3004');
    const client2 = io('http://localhost:3004');
    
    client2.on('new-project', (project) => {
      expect(project.title).to.equal('Real-time Test');
      client1.disconnect();
      client2.disconnect();
      done();
    });
    
    client1.emit('project-created', {
      title: 'Real-time Test',
      description: 'Testing real-time sync'
    });
  });
});
```

## API Endpoints

### Traditional REST API
| Method | Endpoint | Description | Request Body | Real-time Event |
|--------|----------|-------------|--------------|-----------------|
| `GET` | `/api/projects` | Get all projects | None | - |
| `GET` | `/api/projects/:id` | Get project by ID | None | - |
| `POST` | `/api/projects` | Create new project | `{ title, image, link, description }` | `new-project` |
| `PUT` | `/api/projects/:id` | Update project | `{ title, image, link, description }` | `project-changed` |
| `DELETE` | `/api/projects/:id` | Delete project | None | `project-removed` |

### Socket.io Events

#### Client to Server Events
| Event | Description | Data | Response Event |
|-------|-------------|------|----------------|
| `join-projects` | Join projects room | None | `joined-projects` |
| `join-chat` | Join chat room | `{ username }` | `user-joined` |
| `send-message` | Send chat message | `{ message, username }` | `new-message` |
| `user-typing` | User typing indicator | `{ username }` | `user-typing-update` |

#### Server to Client Events
| Event | Description | Data | Trigger |
|-------|-------------|------|---------|
| `new-project` | New project created | `{ project }` | Project creation |
| `project-changed` | Project updated | `{ project }` | Project update |
| `project-removed` | Project deleted | `{ projectId }` | Project deletion |
| `new-message` | New chat message | `{ message, username, timestamp }` | Message sent |
| `user-joined` | User joined chat | `{ username }` | User connection |
| `user-left` | User left chat | `{ username }` | User disconnection |

## Real-time Features

### Live Project Updates
- **Automatic Sync**: All project changes sync instantly across all connected clients
- **Visual Feedback**: Real-time animations and notifications for updates
- **Conflict Resolution**: Handling simultaneous updates gracefully

### Chat System
- **Instant Messaging**: Real-time chat with message history
- **User Presence**: Live user list and typing indicators
- **Message Broadcasting**: Messages appear instantly for all users

### Notifications
- **Live Alerts**: Real-time notifications for system events
- **Custom Events**: Configurable notification system
- **Toast Messages**: Non-intrusive real-time feedback

## Testing

### Test Structure

The testing suite includes Socket.io-specific tests:

#### Traditional Tests (From Week 6)
- **Model Tests**: Validate schema, required fields, and model methods
- **Service Tests**: Test database operations and business logic
- **API Tests**: End-to-end testing of REST endpoints

#### Socket.io Tests (New in Week 7)
- **Event Tests**: Test Socket.io event handlers and emissions
- **Connection Tests**: Test connection/disconnection scenarios
- **Real-time Integration**: Test complete real-time workflows
- **Performance Tests**: Test Socket.io performance under load

### Available Test Scripts

- `npm test` - Run all tests (HTTP + Socket.io)
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:watch` - Run tests in watch mode for development
- `npm run test:unit` - Run only unit tests
- `npm run test:integration` - Run only integration tests
- `npm run test:sockets` - Run only Socket.io tests
- `npm run test:realtime` - Run real-time communication tests
- `npm run coverage:report` - Generate and open coverage report

### Test Coverage Goals

- **Statements**: >90% (including Socket.io handlers)
- **Branches**: >85%
- **Functions**: >90%
- **Lines**: >90%
- **Socket Events**: 100% event coverage

## Development

### Available Scripts

- `npm start` - Run the production server with Socket.io
- `npm run dev` - Run development server with auto-restart and Socket.io
- `npm test` - Run all tests including Socket.io tests
- `npm run test:coverage` - Run tests with coverage
- `npm run test:sockets` - Run Socket.io-specific tests
- `npm run test:watch` - Run tests in watch mode
- `node seed.js` - Populate database with sample data

### Environment Variables

- `PORT` - Server port (default: 3004)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://127.0.0.1:27017/myprojectDB)
- `TEST_MONGODB_URI` - Test database URI (default: mongodb://127.0.0.1:27017/myprojectDB_test)
- `NODE_ENV` - Environment (development/test/production)
- `SOCKET_IO_ORIGINS` - Allowed Socket.io origins (default: *)

### Socket.io Configuration

```javascript
const io = require('socket.io')(server, {
  cors: {
    origin: process.env.SOCKET_IO_ORIGINS || "*",
    methods: ["GET", "POST"]
  },
  transports: ['websocket', 'polling']
});
```

## Continuous Integration

Extended CI/CD pipeline with Socket.io testing:

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
      - run: npm run test:sockets
      - run: npm run test:coverage
```

## Error Handling

Comprehensive error handling for both HTTP and Socket.io:

### HTTP Errors (From Week 6)
- **400 Bad Request**: Missing required fields (tested)
- **404 Not Found**: Resource not found (tested)
- **422 Unprocessable Entity**: Validation errors (tested)
- **500 Internal Server Error**: Server errors (tested)

### Socket.io Error Handling (New in Week 7)
- **Connection Errors**: Network disconnection handling
- **Event Errors**: Invalid event data handling
- **Room Errors**: Room join/leave error handling
- **Broadcasting Errors**: Failed message delivery handling

## Performance Considerations

### Socket.io Optimization
- **Connection Pooling**: Efficient connection management
- **Event Throttling**: Preventing event spam
- **Memory Management**: Proper cleanup of disconnected clients
- **Scalability**: Room-based communication for better performance

## License

This project is licensed under the ISC License.

## Author

[Sophie Ngo](https://www.linkedin.com/in/callmesoffie/)

---

