const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient= require('mongodb').MongoClient
const cors = require('cors')
const { Callbacks } = require('jquery')
const PORT = process.env.PORT || 3000
var ObjectId = require('mongodb').ObjectID;
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
        app.use(express.static(__dirname + '/public'))
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
            jobCollection.find().toArray()
            .then(results => {
                console.log(`New Login Detected! User: ${userName} PW: ${passWord}`)
                res.render('dashboard.ejs', {jobCollectionArray: results})
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

        app.get('/preview', (req, res) => {
            res.sendFile(__dirname + '/views/preview.html')
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

        app.get('/job', (req, res) => {
            jobCollection.find({"_id":ObjectId(req.query._id)}).toArray()
            .then(results => {
                //console.log(`JobsPage: ${results}`)
                res.render('job.ejs', {jobArray: results})
            })
            .catch(error => console.log(error))
        })

        app.post('/addjob', (req, res) => {
            jobCollection.insertOne({
                name: req.body.customerName, 
                year: req.body.caryear, 
                make: req.body.carmake, 
                model: req.body.carmodel,
                engine: req.body.carengine,
                image: req.body.carimage,
                repair: req.body.commonRepair,
                job_type: req.body.jobtype,
                job_description: req.body.jobDescription,
                employee_assigned: req.body.employeeassign,
                priority: req.body.priority, 
                status: 0,
                date: new Date(),
                parts_list: {},
                job_total: 0
            })
            customerData.insertOne({
                customer: req.body.customerName,
                customer_phone: req.body.customerphone,
                customer_email: req.body.customeremail,
                cars: {
                    year: req.body.caryear,
                    make: req.body.carmake,
                    model: req.body.carmodel,
                    engine: req.body.carengine
                },
                dateCreated: new Date()
            })
            .then(result => {
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

        app.get('/customer', (req, res) => {
            //console.log(req.query._id)
            customerData.find({"_id":ObjectId(req.query._id)}).toArray()
            .then(results => {
                // console.log(results)
                res.render('customer.ejs', {customerInfo: results})
            })
            .catch(error=> console.log(error))
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
            shopInfo.find().toArray()
            .then(results => {
                res.render('addshop.ejs', {shopDataArray: results})
            })
            .catch(error => console.log(error))
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
                employee_specialty: req.body.employeespecialty,
                rate_of_pay: Math.round(Number(req.body.hourlyWage) * 100) / 100,
                date: new Date(),
                jobs: {
                    activeJobs: 2,
                    completedJobs: 5,
                }
            })
            .then(result => {
                console.log(result)
                res.redirect('myshop')
            })
            .catch(error => console.log(error))
        })

        app.get('/employee', (req, res) => {
            employeeData.find({"_id":ObjectId(req.query._id)}).toArray()
            .then(results => {
                //console.log(results)
                res.render('employee.ejs', {employeeData: results})
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

        app.delete('/deleteJob', (req, res) => {
            jobCollection.deleteOne({_id: new ObjectId(req.body.ObjectId)})
            .then(result => {
                console.log(`Job ${req.body.ObjectId} deleted.`)
                res.json('Job Deleted')
            })
            .catch(err => console.log(err))
        })

        app.delete('/deleteCust', (req, res) => {
            customerData.deleteOne({_id: new ObjectId(req.body.ObjectId)})
            jobCollection.deleteOne({name: req.body.CustName})
            // console.log(req.body.ObjectId)
            .then(result => {
                console.log(`Customer ${req.body.ObjectId} deleted.`)
                res.json('Customer Deleted')
            })
            .catch(err => console.log(err))
        })

        app.listen(process.env.PORT || PORT, (req, res) => {
            console.log(`GearHead is running on port ${PORT}.`)
        })
    })
    .catch(error => console.log(error))