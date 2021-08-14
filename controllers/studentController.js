const Student = require('../models/studentModel');

const getAllStudent = (req, res) => {
	Student.find()
		.then((result) => {
			res.render('index', { title: 'Home Page', student: result });
		})
		.catch((err) => console.log(err));
};

const createStudent = async (req, res) => {
	console.log(req.body);
	const student = await new Student({
		name: req.body.name,
		rollno: req.body.rollno,
		address: req.body.address,
	});

	student
		.save()
		.then((result) => res.redirect('/student'))
		.catch((err) => console.log(err));
};

const deleteStudent = (req, res) => {
	const id = req.params.id;
	Student.findByIdAndDelete(id)
		.then((result) => res.json({ redirect: '/student' }))
		.catch((err) => console.log(err));
};

module.exports = {
	getAllStudent,
	createStudent,
	deleteStudent,
};
