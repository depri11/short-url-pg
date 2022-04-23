require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const db = require('./src/configs/')
const route = require('./src/routes')
const port = process.env.PORT || 4000

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', route)

db.connect()
    .then(() => {
        app.listen(port, () => {
            console.log(`Running at port ${port}`)
        })
        console.log('Database Connected')
    })
    .catch((err) => {
        console.log(err)
    })
