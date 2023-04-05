'use strict';

const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

router.get('/', readAllEmployee);
router.get('/:id', readAnEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

async function readAllEmployee(request, response, next) {
  let data = await Employee.findAll();
  response.status(200).json(data);
}

async function readAnEmployee(request, response, next) {
  let id = request.params.id;
  const allEmployees = await Employee.findAll({
    where: {
      id: id
    }
  })

  response.status(200).json(allEmployees);
}

async function createEmployee(request, response, next) {
  const newEmployee = await Employee.create(request.body);
  response.status(201).json(newEmployee);
}

async function updateEmployee(request, response, next) {
  let id = request.params.id;
  const updatedEmployee = await Employee.update(request.body, {
    where: {
      id: id
    }
  })

  response.status(200).json(updatedEmployee);
}

async function deleteEmployee(request, response, next) {
  let id = request.params.id;

  const deletedEmployee = await Employee.destroy({
    where: {
      id: id
    }
  });

  response.status(200).json(deletedEmployee);
}

module.exports = router;