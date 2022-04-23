const models = require('../models')
const response = require('../helpers')
const urls = {}

urls.getUrl = async (req, res) => {
    try {
        const { id } = req.params
        const data = await models.Get({ id })
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error.message)
    }
}

urls.createUrl = async (req, res) => {
    try {
        const { url, slug } = req.body
        const data = await models.Create({ url, slug })
        return response(res, 201, data)
    } catch (error) {
        return response(res, 500, error.message)
    }
}

module.exports = urls
