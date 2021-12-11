require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const hostname = 'localhost'
const port = process.env.PORT || 8080
const path = require('path')

const studentRouter = require('./routes/studentRoutes')
const Student = require('./models/studentModel')

// Setting 'public' as static folder
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')))

// Post from parser
app.use(express.urlencoded({ extended: true }))

// Setting ejs template engine
app.set('view engine', 'ejs')

// parse application/json
app.use(bodyParser.json())

// parse application/json
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
)

// Mongo db connection
const dbURI = process.env.MONGODB_URI
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(response => console.log('Connected to database!'))
	.catch(err => console.log('Connection Failed!', err))

app.get('/', (req, res) => {
	res.redirect('/student')
})

// All todo routes
app.use(studentRouter)

// 404 page
app.use((req, res) => {
	res.status(404).render('404', { title: '404 Page' })
})

app.listen(port, () => console.log(`Server run on http://${hostname}:${port}`))
