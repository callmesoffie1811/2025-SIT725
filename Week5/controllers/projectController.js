const { projectServices: projectServices } = require('../services');

exports.getAll = async (_req, res, next) => {
  try { res.json({ statusCode: 200, data: await projectServices.getAll() }); }
  catch (e) { next(e); }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await projectServices.getById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json({ statusCode: 200, data: item });
  } catch (e) { next(e); }
};

exports.create = async (req, res, next) => {
  try {
    const { title, image, link, description } = req.body || {};
    if (!title) return res.status(400).json({ error: 'title is required' });
    const created = await projectServices.create({ title, image, link, description });
    res.status(201).json({ statusCode: 201, data: created });
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    const updated = await projectServices.update(req.params.id, req.body || {});
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json({ statusCode: 200, data: updated });
  } catch (e) { next(e); }
};

exports.remove = async (req, res, next) => {
  try {
    const ok = await projectServices.remove(req.params.id);
    if (!ok) return res.status(404).json({ error: 'Not found' });
    res.json({ statusCode: 200, success: true });
  } catch (e) { next(e); }
};
