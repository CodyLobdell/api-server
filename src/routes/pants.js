'use strict';

const express = require('express');
const router = express.Router();
const Pants = require('../models/pants');

router.get('/', readAllPants);
router.get('/:id', readAnPants);
router.post('/', createPants);
router.put('/:id', updatePants);
router.delete('/:id', deletePants);

async function readAllPants(request, response, next) {
  let data = await Pants.findAll();
  response.status(200).json(data);
}

async function readAnPants(request, response, next) {
  let id = request.params.id;
  const allPants = await Pants.findAll({
    where: {
      id: id
    }
  })

  response.status(200).json(allPants);
}

async function createPants(request, response, next) {
  const newPants = await Pants.create(request.body);
  response.status(201).json(newPants);
}

async function updatePants(request, response, next) {
  let id = request.params.id;
  const updatedPants = await Pants.update(request.body, {
    where: {
      id: id
    }
  })

  response.status(200).json(updatedPants);
}

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