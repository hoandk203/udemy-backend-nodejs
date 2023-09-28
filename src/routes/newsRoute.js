const express = require('express')
const router = express.Router()
const newsController = require('../controllers/newsController')

router.get('/', newsController.getNewspage)
router.get('/shinki', newsController.getShinki)

module.exports = router