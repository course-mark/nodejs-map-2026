const express = require('express');
const { getStudentController, createStudentController } = require('./controller');

const studentsRouter = express.Router()

studentsRouter.get('/', getStudentController)
studentsRouter.post('/', createStudentController)


module.exports = studentsRouter