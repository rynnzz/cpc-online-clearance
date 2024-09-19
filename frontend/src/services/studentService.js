import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students'; // Update based on your backend route

export default {
  getAllStudents() {
    return axios.get(API_URL);
  },

  getStudentById(id) {
    // Fetches the details of a single student by their ID
    return axios.get(`${API_URL}/${id}`);
  },

  addStudent(student) {
    return axios.post(API_URL, student);
  },

  updateStudent(id, student) {
    return axios.put(`${API_URL}/${id}`, student);
  },

  deleteStudent(id) {
    return axios.delete(`${API_URL}/${id}`);
  },

  updatePassword(id, newPassword) {
    // Update student's password by their ID
    return axios.post(`${API_URL}/${id}/change-password`, { password: newPassword });
  },
};
