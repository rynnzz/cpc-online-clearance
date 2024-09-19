const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Get all students
router.get('/', studentController.getAllStudents);

// Get student by ID
router.get('/:id', studentController.getStudentById); // New route to fetch student by ID

// Add a new student
router.post('/', studentController.addStudent);

// Update a student
router.put('/:id', studentController.updateStudent);

// Update student password
router.post('/:id/change-password', studentController.updatePassword); // New route to update password

// Delete a student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
