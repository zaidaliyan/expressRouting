const express = require('express');
const studentModel = require('../model/student.model');
const { getStudents,getStudentsWithId ,addStudents,updateStudents,deleteStudents} = require('../controllers/student.controller');
const routes = express.Router();

routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

// get all the students
routes.get('/',getStudents);

// get the student with an id
routes.get('/:id', getStudentsWithId);

//insert students into the database
routes.post('/', addStudents);

//update student with a particular id

routes.put('/:id',updateStudents)

//delete students with a particular id

routes.delete('/:id',deleteStudents)

module.exports = routes;
