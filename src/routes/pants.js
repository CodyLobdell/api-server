'use strict';

const express = require('express');
const router = express.Router();
const Pants = require('../models/pants');
// defining CRUD and the functions to run
router.get('/', readAllPants);
router.get('/:id', readAnPants);
router.post('/', createPants);
router.put('/:id', updatePants);
router.delete('/:id', deletePants);
// GET functions 
async function readAllPants(request, response, next) {
  let data = await Pants.findAll();
  response.status(200).json(data);
}
// GET functions for a specific id
async function readAnPants(request, response, next) {
  let id = request.params.id;
  const allPants = await Pants.findAll({
    where: {
      id: id
    }
  })

  response.status(200).json(allPants);
}
// POST functions 
async function createPants(request, response, next) {
  const newPants = await Pants.create(request.body);
  response.status(201).json(newPants);
}
// Put function
async function updatePants(request, response, next) {
  let id = request.params.id;
  const updatedPants = await Pants.update(request.body, {
    where: {
      id: id
    }
  })

  response.status(200).json(updatedPants);
}
// delete function
async function deletePants(request, response, next) {
  let id = request.params.id;

  const deletedPants = await Pants.destroy({
    where: {
      id: id
    }
  });

  response.status(200).json(deletedPants);
}

module.exports = router;