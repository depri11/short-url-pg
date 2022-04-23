const route = require('express').Router()
const controller = require('../controllers')

route.get('/', controller.getUrl)
route.post('/', controller.createUrl)

module.exports = route
