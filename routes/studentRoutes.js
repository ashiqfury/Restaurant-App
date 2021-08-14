const express = require('express');
const router = express.Router();
const studentRoutes = require('../controllers/studentController');

router.get('/student', studentRoutes.getAllStudent);
router.post('/student', studentRoutes.createStudent);
// router.get('/student/create', studentRoutes.student_create_get);
// router.get('/student/:id', studentRoutes.student_details);
router.delete('/student/:id', studentRoutes.deleteStudent);

module.exports = router;
