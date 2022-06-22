const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient= require('mongodb').MongoClient
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('homePage.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.post('/signin', (req, res) => {
    let userName = req.body.username
    let passWord = req.body.password
    console.log(`Username: ${userName} Password: ${passWord}`)
    res.render('dashboard.ejs')
})

app.post('/signup', (req, res) => {
    let userName = req.body.newusername
    let passWord = req.body.newpassword
    res.send(`Username: ${userName} Password: ${passWord}`)
})

app.get('/pricing', (req, res) => {
    res.render('pricing.ejs')
})

app.get('/company', (req, res) => {
    res.render('company.ejs')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs')
})

app.get('/jobs', (req, res) => {
    res.render('jobs.ejs')
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}.`)
})