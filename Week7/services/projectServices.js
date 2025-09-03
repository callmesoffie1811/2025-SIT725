const Project = require('../models/Project');

async function getAll() {
  // Fetch all projects from the database sorted by title
  return Project.find({}).sort({ title: 1 });
}
async function getById(id) {
  return Project.findById(id);
}
async function create(payload) {
  return Project.create(payload);
}
async function update(id, payload) {
  return Project.findByIdAndUpdate(id, payload, { new: true });
}
async function remove(id) {
  const res = await Project.findByIdAndDelete(id);
  return !!res;
}

module.exports = { getAll, getById, create, update, remove };
