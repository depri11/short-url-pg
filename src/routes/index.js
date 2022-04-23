const route = require('express').Router()
const controller = require('../controllers')

route.post('/', controller.createUrl)

module.exports = route
