const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3004;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myprojectDB';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));

app.use('/api/projects', require('./routes/projects'));

app.get('/', (_req, res) => res.send('Week 5 MVC — Home'));

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
