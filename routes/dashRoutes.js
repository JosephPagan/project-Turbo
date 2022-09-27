const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dashboard')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware.ensureAuth, dashController.getDash)

router.get('/jobs', authMiddleware.ensureAuth, dashController.getJobs)

router.post('/addjob', authMiddleware.ensureAuth, dashController.postJob)

router.delete('/deletejob', authMiddleware.ensureAuth, dashController.deleteJob)

router.get('/job', authMiddleware.ensureAuth, dashController.getJob)

router.put('/updatejob', authMiddleware.ensureAuth, dashController.updateJob)

router.get('/customers', authMiddleware.ensureAuth, dashController.getCustomers)

router.get('/customer', authMiddleware.ensureAuth, dashController.getCustomer)

router.delete('/deleteCust', authMiddleware.ensureAuth, dashController.deleteCust)

router.get('/myshop', authMiddleware.ensureAuth, dashController.getShop)

router.get('/editshop', authMiddleware.ensureAuth, dashController.getShopEdit)

router.put('/editshop', authMiddleware.ensureAuth, dashController.editShop)

router.get('/addshop', authMiddleware.ensureAuth, dashController.getAddShop)

router.post('/addshop', authMiddleware.ensureAuth, dashController.postShop)

router.post('/addemployee', authMiddleware.ensureAuth, dashController.addEmployee)

router.delete('/deleteEmployee', authMiddleware.ensureAuth, dashController.deleteEmployee)

router.get('/employee', authMiddleware.ensureAuth, dashController.getEmployee)

router.put('/updateEmployee', authMiddleware.ensureAuth, dashController.updateEmployee)

router.get('/pointofsale', authMiddleware.ensureAuth, dashController.getPointOfSale)

router.get('/reports', authMiddleware.ensureAuth, dashController.getReports)

router.get('/appsettings', authMiddleware.ensureAuth, dashController.getSettings)

router.post('/createComment/:id', authMiddleware.ensureAuth, dashController.postComment)


module.exports = router

