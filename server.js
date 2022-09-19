// import modules
import express from 'express'

// import student data
// import { students } from './data/students-data.js'
import { students } from './data/student-data.js'

// create Express app
const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')

// Mount Middleware (app.use)

// Mount routes
app.get ('/home', function(req, res){
  res.render ('home')
})

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/students', function(req, res){
  res.render('students/index', {
    students: students
  })
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})
