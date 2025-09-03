const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const http = require('http').createServer(app); // Move after app declaration
const io = require('socket.io')(http); // Pass http server to socket.io

const PORT = process.env.PORT || 3004;
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? (process.env.TEST_MONGODB_URI || 'mongodb://127.0.0.1:27017/myprojectDB_test')
  : (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myprojectDB');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

app.use('/api/projects', require('./routes/projects'));

app.get('/', (_req, res) => res.send('Week 7 MVC with Socket.IO — Home'));

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('a user connected:', socket.id);
  
  // Send random numbers every second
  const interval = setInterval(() => {
    socket.emit('number', parseInt(Math.random() * 10));
  }, 1000);
  
  // Clean up interval on disconnect
  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
    clearInterval(interval);
  });
});

// Use http server instead of app for listening
http.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));