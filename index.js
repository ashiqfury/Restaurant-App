require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const hostname = 'localhost';
const port = process.env.PORT || 2506;

const studentRouter = require('./routes/studentRoutes');
const Student = require('./models/studentModel');

// Setting 'public' as static folder
app.use(express.static('public'));

// Post from parser
app.use(express.urlencoded({ extended: true }));

// Setting ejs template engine
app.set('view engine', 'ejs');

// parse application/json
app.use(bodyParser.json());

// parse application/json
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Mongo db connection
const dbUser = process.env.DB_HOST_NAME;
const dbPassword = process.env.DB_SECRET;
const dbName = process.env.DB_NAME;
const dbURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.mfyow.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((response) => console.log('Connected to database!'))
	.catch((err) => console.log('Connection Failed!', err));

app.get('/', (req, res) => {
	res.redirect('/student');
});

// Post req

// Getting all test data
app.get('/student/get-all', (req, res) => {
	Student.find()
		.then((result) => {
			res.send(result);
		})

		.catch((err) => console.log(err));
});

// All todo routes
app.use(studentRouter);

// About page
// app.get('/about', (req, res) => {
// 	res.render('about', { title: 'About Page' });
// });

// 404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404 Page' });
});

app.listen(port, () => console.log(`Server run on http://${hostname}:${port}`));
