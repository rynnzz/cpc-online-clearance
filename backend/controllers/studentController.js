const studentModel = require('../models/studentModel');
const bcrypt = require('bcryptjs');

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const role = 'student'; // Specify the role you want to filter by
        const [students] = await studentModel.getAllStudents(role);
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const [student] = await studentModel.findById(id);
        if (!student.length) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new student
exports.addStudent = async (req, res) => {
    const newStudent = req.body;
    try {
        await studentModel.addStudent(newStudent);
        res.json({ message: 'Student added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a student
exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const updatedStudent = req.body;
    try {
        await studentModel.updateStudent(id, updatedStudent);
        res.json({ message: 'Student updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update student password
exports.updatePassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    try {
        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        await studentModel.updatePassword(id, hashedPassword);
        res.json({ message: 'Password updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        await studentModel.deleteStudent(id);
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
