const models = require('../models')
const response = require('../helpers')

exports.createUrl = async (req, res) => {
    try {
        const { url, slug } = req.body
        const data = await models.Create({ url, slug })
        return response(res, 201, data)
    } catch (error) {
        return response(res, 201, error)
    }
}
