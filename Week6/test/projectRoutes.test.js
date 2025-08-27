const { expect } = require('chai');
const request = require('request');
const mongoose = require('mongoose');
const Project = require('../models/Project');

const baseUrl = 'http://localhost:3004/api/projects';

describe('Project API Routes', function() {
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
    await Project.deleteMany({});
    await mongoose.connection.close();
  });

  describe('GET /api/projects', function() {
    it('should return all projects', function(done) {
      request.get(baseUrl, (error, response, body) => {
        if (error) return done(error);
        
        const data = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(data).to.have.property('statusCode', 200);
        expect(data).to.have.property('data');
        expect(data.data).to.be.an('array');
        done();
      });
    });
  });

  describe('POST /api/projects', function() {
    it('should create a new project', function(done) {
      // 1. ARRANGE: Prepare test data
      const projectData = {
        title: 'Kitten 5 Test',
        description: 'Created via API test',
        image: 'images/kittentest.jpg',
        link: 'About Kitten 5 Test'
      };

      // 2. ACT: Make the HTTP request
      request.post({
        url: baseUrl,
        json: projectData
      }, (error, response, body) => {

      // 3. ASSERT: Check if it worked
        if (error) return done(error);
        
        expect(response.statusCode).to.equal(201);
        expect(body).to.have.property('statusCode', 201);
        expect(body.data).to.have.property('title', 'Kitten 5 Test');
        done(); // Tell Mocha this test is finished
      });
    });

    it('should return 400 when title is missing', function(done) {
      const projectData = {
        description: 'Missing title'
      };

      request.post({
        url: baseUrl,
        json: projectData
      }, (error, response, body) => {
        if (error) return done(error);
        
        expect(response.statusCode).to.equal(400);
        expect(body).to.have.property('error', 'title is required');
        done();
      });
    });
  });

  describe('GET /api/projects/:id', function() {
    it('should return 404 for non-existent project', function(done) {
      const fakeId = new mongoose.Types.ObjectId();
      
      request.get(`${baseUrl}/${fakeId}`, (error, response, body) => {
        if (error) return done(error);
        
        const data = JSON.parse(body);
        expect(response.statusCode).to.equal(404);
        expect(data).to.have.property('error', 'Not found');
        done();
      });
    });
  });

  describe('DELETE /api/projects/:id', function() {
    it('should return 404 when trying to delete non-existent project', function(done) {
      const fakeId = new mongoose.Types.ObjectId();
      
      request.delete(`${baseUrl}/${fakeId}`, (error, response, body) => {
        if (error) return done(error);
        
        const data = JSON.parse(body);
        expect(response.statusCode).to.equal(404);
        expect(data).to.have.property('error', 'Not found');
        done();
      });
    });
  });
});
