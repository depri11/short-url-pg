const db = require('../configs')
const models = {}

models.Create = function ({ url, slug }) {
    return new Promise(function (resolve, reject) {
        db.query('INSERT INTO public.urls (url, slug, created_at, updated_at) VALUES($1, $2, now(), now())', [url, slug])
            .then(() => {
                return resolve
            })
            .catch((err) => reject(err))
    })
}

module.exports = models
