'use strict';

const express = require('express');
const router = express.Router();
const Hat = require('../models/hat');
// defining CRUD and the functions to run
router.get('/', readAllHat);
router.get('/:id', readAHat);
router.post('/', createHat);
router.put('/:id', updateHat);
router.delete('/:id', deleteHat);
// GET functions 
async function readAllHat(request, response, next) {
  let data = await Hat.findAll();
  response.status(200).json(data);
}
// GET functions for a specific id
async function readAHat(request, response, next) {
  let id = request.params.id;
  const allHats = await Hat.findAll({
    where: {
      id: id
    }
  })

  response.status(200).json(allHats);
}
// POST functions 
async function createHat(request, response, next) {
  const hat = await Hat.create(request.body);
  response.status(201).json(hat);
}
// Put function
async function updateHat(request, response, next) {
  let id = request.params.id;
  const updatedHat= await Hat.update(request.body, {
    where: {
      id: id
    }
  })

  response.status(200).json(updatedHat);
}
// delete function
async function deleteHat(request, response, next) {
  let id = request.params.id;

  const deletedHat = await Hat.destroy({
    where: {
      id: id
    }
  });

  response.status(200).json(deletedHat);
}

module.exports = router;