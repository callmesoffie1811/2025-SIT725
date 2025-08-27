const { expect } = require('chai');
const mongoose = require('mongoose');
const projectServices = require('../services/projectServices');
const Project = require('../models/Project');

describe('Project Services', function() {
  before(async function() {
    // Connect to test database
    const TEST_MONGODB_URI = process.env.TEST_MONGODB_URI || 'mongodb://127.0.0.1:27017/myprojectDB_test';
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(TEST_MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }
  });

  beforeEach(async function() {
    // Clean database before each test
    await Project.deleteMany({});
  });

  after(async function() {
    // Clean up and close connection
    await Project.deleteMany({});
    await mongoose.connection.close();
  });

  describe('create()', function() {
  it('should create a new project successfully', async function() {
    const projectData = {
      title: 'Kitten 6 Test',
      description: 'Kitten 6 Test',
      image: 'images/kittentest.jpg',
      link: 'About Kitten 6 Test'
    };

    const result = await projectServices.create(projectData);
    
    expect(result).to.have.property('_id');
    expect(result.title).to.equal('Kitten 6 Test');
    expect(result.description).to.equal('Kitten 6 Test');
  });
});

  describe('getAll()', function() {
    it('should return all projects sorted by title', async function() {
      // Create test data
      await projectServices.create({ title: 'Z Project', description: 'Last' });
      await projectServices.create({ title: 'A Project', description: 'First' });

      const results = await projectServices.getAll();
      
      expect(results).to.be.an('array');
      expect(results).to.have.length(2);
      expect(results[0].title).to.equal('A Project');
      expect(results[1].title).to.equal('Z Project');
    });
  });

  describe('getById()', function() {
    it('should return a project by ID', async function() {
      const created = await projectServices.create({
        title: 'Test Project',
        description: 'Test Description'
      });

      const result = await projectServices.getById(created._id);
      
      expect(result).to.not.be.null;
      expect(result.title).to.equal('Test Project');
    });

    it('should return null for non-existent ID', async function() {
      const fakeId = new mongoose.Types.ObjectId();
      const result = await projectServices.getById(fakeId);
      
      expect(result).to.be.null;
    });
  });

  describe('remove()', function() {
    it('should delete a project and return true', async function() {
      const created = await projectServices.create({
        title: 'To Delete',
        description: 'Will be deleted'
      });

      const result = await projectServices.remove(created._id);
      
      expect(result).to.be.true;
      
      const deleted = await projectServices.getById(created._id);
      expect(deleted).to.be.null;
    });

    it('should return false for non-existent ID', async function() {
      const fakeId = new mongoose.Types.ObjectId();
      const result = await projectServices.remove(fakeId);
      
      expect(result).to.be.false;
    });
  });
});
