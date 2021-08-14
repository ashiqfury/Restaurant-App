const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		rollno: {
			type: Number,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
	},
	{ timeStamps: true }
);

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
