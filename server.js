const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient= require('mongodb').MongoClient
const cors = require('cors')
const { Callbacks } = require('jquery')
const PORT = process.env.PORT || 3000
const connectionString = 'mongodb+srv://silkysmooth:Shadow69@cluster0.hrbhhki.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('customer-jobs')
        const jobCollection = db.collection('customerJobs')
        const customerData = db.collection('customers')
        const employeeData = db.collection('employees')
        const shopInfo = db.collection('shop-info')

        app.use(cors())
        app.set('view engine', 'ejs')
        app.use(express.static('public'))
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())

        app.get('/', (req, res) => {
            res.render('homePage.ejs')
        })

        app.get('/login', (req, res) => {
            res.render('login.ejs')
        })

        app.post('/signin', (req, res) => {
            let userName = req.body.username
            let passWord = req.body.password
            //console.log(`Username: ${userName} Password: ${passWord}`)
            jobCollection.find().toArray()
            .then(results => {
                console.log(`New Login Detected! User: ${userName} PW: ${passWord}`)
                res.render('dashboard.ejs', {jobCollectionArray: results},)
            })
            .catch(error => console.log(error))
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
            jobCollection.find().toArray()
            .then(results => {
                //console.log(`DashPage: ${results}`)
                res.render('dashboard.ejs', {jobCollectionArray: results})
            })
            .catch(error => console.log(error))
        })

        app.get('/jobs', (req, res) => {
            jobCollection.find().toArray()
            .then(results => {
                //console.log(`JobsPage: ${results}`)
                res.render('jobs.ejs', {jobCollectionArray: results})
            })
            .catch(error => console.log(error))
        })

        app.post('/addjob', (req, res) => {
            jobCollection.insertOne({number: 1, 
                name: req.body.customerName, 
                year: req.body.caryear, 
                make: req.body.carmake, 
                model: req.body.carmodel, 
                job: req.body.jobDescription,
                employee_assigned: req.body.employeeassign,
                priority: 'low', 
                status: 0,
                date: new Date()
            })
            customerData.insertOne({
                customer: req.body.customerName,
                cars: {
                    year: req.body.caryear,
                    make: req.body.carmake,
                    model: req.body.carmodel,
                },
                dateCreated: new Date()
            })
            .then(result => {
                console.log(result)
                res.redirect('jobs')
            })
            .catch(error => console.log(error))
        })

        app.get('/customers', (req, res) => {
            // var customerDataObject = {};
            // var jobCollectionObject = {};
            // customerData.find({}, function (err, customerDataResult) {
            //     if(err){
            //         console.log(err)
            //     } else {
            //         customerDataObject = customerDataResult.toArray();
            //     }
            // });
            // jobCollection.find({}, function (err, jobCollectionResult) {
            //     if(err){
            //         console.log(err)
            //     } else {
            //         jobCollectionObject = jobCollectionResult.toArray();
            //         res.render('customers.ejs', {customerDataArray: customerDataObject, jobCollectionArray: jobCollectionObject})
            //     }
            // });

            customerData.find().toArray()
            .then(results => {
                //console.log(`CustomersPage: ${results}`)
                res.render('customers.ejs', {customerDataArray: results})
            })
            .catch(error => console.log(error))
        })

        app.get('/myshop', (req, res) => {
            employeeData.find().toArray()
            .then(results => {
                //console.log(`CustomersPage: ${results}`)
                res.render('myshop.ejs', {employeeDataArray: results})
            })
            .catch(error => console.log(error))
        })

        app.get('/addshop', (req, res) => {
            res.render('addshop.ejs')
        })

        app.post('/addshop', (req, res) => {
            shopInfo.insertOne({
                shopName: req.body.shopName,
                shopEmail: req.body.shopEmail,
                shopPhone: req.body.shopPhone,
                shopAddress: req.body.shopAddress,
                shopCity: req.body.shopCity,
                shopState: req.body.shopState,
                shopZip: req.body.shopZip,
                shopWebsite: req.body.shopWebsite,
                shopOpen: req.body.openhour,
                shopClose: req.body.closehour,
                shopType: req.body.shoptype,
                laborRate: Number(req.body.laborRate),
                average_markup: Number(req.body.aveMarkup)
            })
            .then(result => {
                //console.log(req)
                console.log(result)
                res.redirect('myshop')
            })
            .catch(error => console.log(error))
        })

        app.post('/addemployee', (req, res) => {
            employeeData.insertOne({
                name: req.body.employeeName, 
                email: req.body.employeeEmail, 
                phone: req.body.employeePhone, 
                position: req.body.employeeposition, 
                employee_type: req.body.employeeType,
                date: new Date(),
                jobs: {
                    activeJobs: 1,
                    completedJobs: 3,
                }
            })
            .then(result => {
                console.log(result)
                res.redirect('myshop')
            })
            .catch(error => console.log(error))
        })

        app.get('/pointofsale', (req, res) => {
            jobCollection.find().toArray()
            .then(results => {
                //console.log(`CustomersPage: ${results}`)
                res.render('pointofsale.ejs', {jobCollectionArray: results})
            })
            .catch(error => console.log(error))
        })

        app.get('/reports', (req, res) => {
            jobCollection.find().toArray()
            .then(results => {
                //console.log(`CustomersPage: ${results}`)
                res.render('reports.ejs', {jobCollectionArray: results})
            })
            .catch(error => console.log(error))
        })

        app.get('/appsettings', (req, res) => {
            res.render('settings.ejs')
        })

        app.listen(process.env.PORT || PORT, (req, res) => {
            console.log(`Server is running on port ${PORT}.`)
        })
    })
    .catch(error => console.log(error))