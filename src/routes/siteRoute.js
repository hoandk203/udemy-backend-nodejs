const express = require('express')
const router = express.Router()
const siteController = require('../controllers/siteController')

router.get('/', siteController.getHomepage)

router.get('/search', siteController.getSearchpage)

module.exports = router