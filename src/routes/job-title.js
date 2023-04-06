'use strict';

const express = require('express');
const router = express.Router();
const JobTitle = require('../models/job-title');

router.get('/', readAllJobTitle);
router.get('/:id', readAJobTitle);
router.post('/', createJobTitle);
router.put('/:id', updateJobTitle);
router.delete('/:id', deleteJobTitle);

async function readAllJobTitle(request, response, next) {
  let data = await JobTitle.findAll();
  response.status(200).json(data);
}

async function readAJobTitle(request, response, next) {
  let id = request.params.id;
  const allJobTitles = await JobTitle.findAll({
    where: {
      id: id
    }
  })

  response.status(200).json(allJobTitles);
}

async function createJobTitle(request, response, next) {
  const jobTitle = await JobTitle.create(request.body);
  response.status(201).json(jobTitle);
}

async function updateJobTitle(request, response, next) {
  let id = request.params.id;
  const updatedJobTitle = await JobTitle.update(request.body, {
    where: {
      id: id
    }
  })

  response.status(200).json(updatedJobTitle);
}

async function deleteJobTitle(request, response, next) {
  let id = request.params.id;

  const deletedJobTitle = await JobTitle.destroy({
    where: {
      id: id
    }
  });

  response.status(200).json(deletedJobTitle);
}

module.exports = router;