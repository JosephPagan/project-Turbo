const express = require('express')
const session = require('express-session')
const passport = require('passport')
const flash = require('express-flash')
const app = express()
const connectDB = require('./config/db')

const homeRoutes = require('./routes/homeRoutes')
const dashRoutes = require('./routes/dashRoutes')

const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const path = require('path')
const PORT = process.env.PORT || 3000

require('dotenv').config({ path: './config/config.env' })

require('./config/passport')(passport)

connectDB()

app.use(cors())
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride("_method"));

app.use(session({ secret: 'cats', resave: false, saveUninitialized: false,  store: MongoStore.create({mongoUrl: process.env.MONGO_URI}) }))
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', homeRoutes)
app.use('/dashboard', dashRoutes)


app.listen(PORT, (req, res) => {
    console.log(`GearHead is running on port ${PORT}.`)
})
