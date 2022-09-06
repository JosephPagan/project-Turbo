const Jobs = require('../models/Jobs')
const Cust = require('../models/Cust')
const Shop = require('../models/Shop')
const { ObjectID } = require('bson')

var ObjectId = require('mongodb').ObjectId

module.exports = {
    getDash: async (req, res) => {
        try{
            const jobsData = await Jobs.find({userId: req.user.id})
            const shopData = await Shop.find({userId: req.user.id})
            // console.log(shopData)
            res.render('dashboard.ejs', {jobCollectionArray: jobsData, shopDataArray: shopData, user: req.user})
        } catch (err) {
            console.log(err)
        }
    },
    getJobs: async (req, res) => {
        try{
            const jobsData = await Jobs.find({userId: req.user.id})
            const shopData = await Shop.find({userId: req.user.id})
            res.render('jobs.ejs', {jobCollectionArray: jobsData, shopDataArray: shopData})
        } catch (err) {
            console.log(err)
        }
    },
    getJob: async (req, res) => {
        console.log(req.query)
        try{
            const jobData = await Jobs.findOne({_id: req.query._id})
            const shopData = await Shop.find({userId: req.user.id})
            console.log(jobData)
            res.render('job.ejs', {jobArray: jobData, shopDataArray: shopData})
        } catch (err) {
            console.log(err)
        }
    },
    postJob: async (req, res) => {
        try{
            await Jobs.create({
                userId: req.user.id,
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
                labor_hours: 0,
                parts_list: {},
                job_total: 0,
                completed: false
            })
            await Cust.create({
                userId: req.user.id,
                customer_name: req.body.customerName,
                customer_phone: req.body.customerphone,
                customer_email: req.body.customeremail,
                cars: [{
                    year: req.body.caryear,
                    make: req.body.carmake,
                    model: req.body.carmodel,
                    engine: req.body.carengine
                }]
            })
            res.redirect('jobs')
        } catch (err) {
            console.log(err)
        }
    },
    updateJob: async (req, res) => {
        try{
            await Jobs.findOneAndUpdate(
                {_id: ObjectId(req.body.jobId)},
                {   $set: {   
                        name: req.body.customerName, 
                        year: req.body.carYear, 
                        make: req.body.carMake, 
                        model: req.body.carModel,
                        engine: req.body.carEngine,
                        image: req.body.carImage,
                        repair: req.body.repairName,
                        job_type: req.body.jobType,
                        job_description: req.body.jobDescription,
                        employee_assigned: req.body.employeeAssigned,
                        priority: req.body.priority, 
                        status: 0,
                        date: new Date(),
                        labor_hours: req.body.laborHour,
                        parts_list: {
                            one: {
                                part_name: req.body.part1_name,
                                part_price: req.body.part1_price,
                                part_status: req.body.part1_status
                            },
                            two: {
                                part_name: req.body.part2_name,
                                part_price: req.body.part2_price,
                                part_status: req.body.part2_status
                            },
                            three: {
                                part_name: req.body.part3_name,
                                part_price: req.body.part3_price,
                                part_status: req.body.part3_status
                            },
                            four: {
                                part_name: req.body.part4_name,
                                part_price: req.body.part4_price,
                                part_status: req.body.part4_status
                            },
                            five: {
                                part_name: req.body.part5_name,
                                part_price: req.body.part5_price,
                                part_status: req.body.part5_status
                            },
                            six: {
                                part_name: req.body.part6_name,
                                part_price: req.body.part6_price,
                                part_status: req.body.part6_status
                            },
                            seven: {
                                part_name: req.body.part7_name,
                                part_price: req.body.part7_price,
                                part_status: req.body.part7_status
                            },
                            eight: {
                                part_name: req.body.part8_name,
                                part_price: req.body.part8_price,
                                part_status: req.body.part8_status
                            },
                            nine: {
                                part_name: req.body.part9_name,
                                part_price: req.body.part9_price,
                                part_status: req.body.part9_status
                            },
                            ten: {
                                part_name: req.body.part10_name,
                                part_price: req.body.part10_price,
                                part_status: req.body.part10_status
                            }
                        },
                        job_total: 0
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
    deleteJob: async (req, res) => {
        try{
            await Jobs.deleteOne({_id: ObjectId(req.body.ObjectId)})
            console.log(`Job ${req.body.ObjectId} deleted.`)
            res.json('Job Deleted')
        } catch (err) {
            console.log(err)
        }
    },
    getCustomers: async (req, res) => {
        try{
            const custData = await Cust.find({userId: req.user.id})
            // console.log(custData)
            res.render('customers.ejs', {customerDataArray: custData})
        } catch (err) {
            console.log(err)
        }
    },
    getCustomer: async (req, res) => {
        try{
            const custData = await Cust.findOne({"_id":ObjectId(req.query._id)})
            console.log(custData)
            res.render('customer.ejs', {customerInfo: custData})
        } catch (err) {
            console.log(err)
        }
    },
    deleteCust: async (req, res) => {
        try{
            await Cust.deleteOne({_id: new ObjectId(req.body.ObjectId)})
            await Jobs.deleteOne({name: req.body.CustName})
            console.log(`Customer ${req.body.ObjectId} deleted.`)
            res.json('Customer Deleted')
        } catch (err) {
            console.log(err)
        }
    },
    getShop: async (req, res) => {
        try{
            const jobData = await Jobs.find({userId: req.user.id})
            const shopData = await Shop.find({userId: req.user.id})
            res.render('myshop.ejs', {jobCollectionArray: jobData, shopDataArray: shopData})
        } catch (err) {
            console.log(err)
        }
    },
    getShopEdit: async (req, res) => {
        try{
            const shopData = await Shop.find({userId: req.user.id})
            res.render('editshop.ejs', {shopDataArray: shopData})
        } catch (err) {
            console.log(err)
        }
    },
    getAddShop: async (req, res) => {
        try{
            const shopData = await Shop.find({userId: req.user.id})
            res.render('addshop.ejs', {shopDataArray: shopData})
        } catch (err) {
            console.log(err)
        }
    },
    postShop: async (req, res) => {
        try{
            await Shop.create({
                userId: req.user.id,
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
                average_markup: Number(req.body.aveMarkup),
                employeeData: []
            })
            res.redirect('myshop')
        } catch (err) {
            console.log(err)
        }
    },
    editShop: async (req, res) => {
        console.log(req.body)
        try{
            await Shop.findOneAndUpdate(
                {_id: ObjectId(req.body.shopId)},{
                shopName: req.body.newShop,
                shopEmail: req.body.newEmail,
                shopPhone: req.body.newPhone,
                shopAddress: req.body.newAddress,
                shopCity: req.body.newCity,
                shopState: req.body.newState,
                shopZip: req.body.newZip,
                shopWebsite: req.body.newWebsite,
                shopOpen: req.body.newOpen,
                shopClose: req.body.newClose,
                shopType: req.body.newtype,
                laborRate: Number(req.body.newRate),
                average_markup: Number(req.body.newMarkup),
            })
            console.log('success')
            res.redirect('myshop')
        } catch (err) {
            console.log(err)
        }
    },
    addEmployee: async (req, res) => {
        try{
            await Shop.findOneAndUpdate(
                {_id: ObjectId(req.body.shopId)},
                {$push: {"employeeData": {
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
                }
            }})
            res.redirect('myshop')
        } catch (err) {
            console.log(err)
        }
    },
    getEmployee: async (req, res) => {
        try{
            const shopData = await Shop.find({userId: req.user.id})
            res.locals.index = req.query.index
            res.render('employee.ejs', {shopDataArray: shopData})
        } catch (err) {
            console.log(err)
        }
    },
    updateEmployee: async (req, res) => {
        try{
            await Shop.findOneAndUpdate(
                {_id: ObjectId(req.body.jobId)},
                {   $set: {   
                        
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
    deleteEmployee: async (req, res) => {
        console.log(req.body)
        try{
            await Shop.findOneAndUpdate({_id: new ObjectId(req.body.ObjectId)})
            console.log(`Employee ${req.body.ObjectId} deleted.`)
            res.json('Employee Deleted')
        } catch (err) {
            console.log(err)
        }
    },
    getPointOfSale: async (req, res) => {
        try{
            const jobData = await Jobs.find({userId: req.user.id})
            res.render('pointofsale.ejs', {jobCollectionArray: jobData})
        } catch (err) {
            console.log(err)
        }
    },
    getReports: async (req, res) => {
        try{
            const jobData = await Jobs.find({userId: req.user.id})
            res.render('reports.ejs', {jobCollectionArray: jobData})
        } catch (err) {
            console.log(err)
        }
    },
    getSettings: async (req, res) => {
        try{
            res.render('settings.ejs')
        } catch (err) {
            console.log(err)
        }
    }
}