const models = require('../models')
const response = require('../helpers')

exports.getUrl = async (req, res) => {
    try {
        const { id } = req.params
        const data = await models.Get({ id })
        return response(res, 200, data)
    } catch (error) {
        return response(res, 500, error.message)
    }
}

exports.createUrl = async (req, res) => {
    try {
        const { url, slug } = req.body
        const data = await models.Create({ url, slug })
        return response(res, 201, data)
    } catch (error) {
        return response(res, 500, error.message)
    }
}
