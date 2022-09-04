const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const authMiddleware = require('../middleware/auth')

router.get('/', dashController.getDash)

router.get('/jobs', dashController.getJobs)

router.post('/addjob', dashController.postJob)

router.delete('/deletejob', dashController.deleteJob)

router.get('/job', dashController.getJob)

router.put('/updatejob', dashController.updateJob)

router.get('/customers', dashController.getCustomers)

router.get('/customer', dashController.getCustomer)

router.get('/myshop', dashController.getShop)

router.get('/editshop', dashController.getShopEdit)

router.put('/editshop', dashController.editShop)

router.get('/addshop', dashController.getAddShop)

router.post('/addshop', dashController.postShop)

router.post('/addemployee', dashController.addEmployee)

router.get('/employee', dashController.getEmployee)

router.get('/pointofsale', dashController.getPointOfSale)

router.get('/reports', dashController.getReports)

router.get('/appsettings', dashController.getSettings)


module.exports = router

