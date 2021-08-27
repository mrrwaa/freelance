const express=require('express')
const cors =require('cors')

require('dotenv').config()
require('./db/connections')

const userRoutes = require('../routes/user.route')
const postRoutes = require('../routes/posts.route')

const app = express()
app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(postRoutes)

module.exports = app
