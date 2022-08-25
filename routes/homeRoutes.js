const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authMiddleware = require('../middleware/auth')

router.get('/', homeController.getHome)

router.get('/pricing', homeController.getPricing)

router.get('/company', homeController.getCompany)

router.get('/login', homeController.getLogin)

router.get('/preview', homeController.getPreview)

module.exports = router