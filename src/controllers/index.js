const models = require('../models')
const response = require('../helpers')
const yup = require('yup')
const { nanoid } = require('nanoid')
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
    let { url, slug } = req.body
    const schema = yup.object().shape({
        url: yup.string().trim().url().required(),
    })
    try {
        await schema.validate({
            url,
        })
        slug = nanoid(5)
        slug = slug.toLowerCase()
        const data = await models.Create({ url, slug })
        return response(res, 201, data)
    } catch (error) {
        return response(res, 500, error.message)
    }
}

module.exports = urls
