const db = require('../configs')
const models = {}

models.Get = function ({ slug }) {
    return new Promise(function (resolve, reject) {
        db.query('SELECT * FROM public.urls WHERE slug=$1', [slug])
            .then((data) => {
                resolve(data.rows)
            })
            .catch((err) => reject(err))
    })
}

models.Create = function ({ url, slug }) {
    return new Promise(function (resolve, reject) {
        db.query('INSERT INTO public.urls (url, slug, created_at, updated_at) VALUES($1, $2, now(), now()) returning *', [url, slug])
            .then((data) => {
                resolve(data.rows)
            })
            .catch((err) => reject(err))
    })
}

module.exports = models
