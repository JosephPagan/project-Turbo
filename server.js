const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient= require('mongodb').MongoClient
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('homePage.ejs')
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}.`)
})