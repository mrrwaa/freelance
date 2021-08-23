const express=require('express')

require('dotenv').config()
require('./db/connections')

const userRoutes = require('../routes/user.route')

const app = express()
app.use(express.json())

app.use(userRoutes)

module.exports = app
