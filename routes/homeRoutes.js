const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')
const authMiddleware = require('../middleware/auth')

router.get('/', homeController.getHome)
router.get('/pricing', homeController.getPricing)
router.get('/company', homeController.getCompany)
router.get('/preview', homeController.getPreview)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.post('/signup', authController.postSignup)
router.get('/logout', authController.logout)

module.exports = router