const models = require('../models')
const response = require('../helpers')
const urls = {}

urls.getUrl = async (req, res) => {
    try {
        const { id: slug } = req.params
        const data = await models.Get({ slug })

        if (data) {
            data.map((e) => {
                res.redirect(e.url)
            })
        }

        res.redirect(`/?error=${slug} not found`)
    } catch (error) {
        res.redirect('/?error=Link not found')
    }
}

urls.createUrl = async (req, res) => {
    try {
        const { url, slug } = req.body
        const data = await models.Create({ url, slug })
        return response(res, 201, data)
    } catch (error) {
        res.redirect('/?error=Link not found')
        return response(res, 500, error.message)
    }
}

module.exports = urls
