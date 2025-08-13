const mongoose = require('mongoose');
const Project = require('./models/Project');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myprojectDB';

(async () => {
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected for seeding');

    await Project.deleteMany({});
    await Project.create([
      { title: 'Kitten 1', image: 'images/kitten1.webp', link: 'About kitten 1', description: 'Hello There!' },
      { title: 'Kitten 2', image: 'images/kitten2.jpg',  link: 'About kitten 2', description: 'Hi! Nice to meet you.' },
      { title: 'Kitten 3', image: 'images/kitten3.webp', link: 'About kitten 3', description: 'Have a great day!' },
      { title: 'Kitten 4', image: 'images/kitten-4.jpg', link: 'About kitten 4', description: 'Welcome to my world!' },
    ]);

    console.log('Seeded!');
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();
