const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')
const authMiddleware = require('../middleware/auth')

router.get('/', authMiddleware.ensureGuest, homeController.getHome)
router.get('/pricing', authMiddleware.ensureGuest, homeController.getPricing)
router.get('/company', authMiddleware.ensureGuest, homeController.getCompany)
router.get('/preview', authMiddleware.ensureGuest, homeController.getPreview)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.post('/signup', authController.postSignup)
router.get('/logout', authController.logout)

module.exports = router