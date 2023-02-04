const express = require('express');
const router = express.Router();

const jobsController = require('../controllers/jobs');

// eslint-disable-next-line no-undef
router.get('/', jobsController.getAll);

// eslint-disable-next-line no-undef
router.get('/:id', jobsController.getSingle);

// eslint-disable-next-line no-undef
router.post('/', jobsController.createJob);

// eslint-disable-next-line no-undef
router.put('/:id', jobsController.updateJob);

// eslint-disable-next-line no-undef
router.delete('/:id', jobsController.deleteJob);

module.exports = router;
