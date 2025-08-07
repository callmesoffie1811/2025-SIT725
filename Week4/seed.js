const mongoose = require('mongoose');
const Project = require('./server'); // import the Project model

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  const sample = new Project({
    title: "Kitten 4",
    image: "images/kitten-4.jpg",
    link: "About Kitten 4",
    description: "Demo description about kitten 4",
  });
  await sample.save();
  console.log("Sample project saved!");
  process.exit();
});
