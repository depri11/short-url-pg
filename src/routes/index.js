const express = require('express')
const route = express.Router()
const controller = require('../controllers')

route.get('/:id', controller.getUrl)
route.post('/', controller.createUrl)

module.exports = route
