const config = require('./utils/config')
const express = require('express')
const app = express()
const exerciseRouter = require('./controllers/exercise')
const mongoose = require('mongoose')
const logger = require('./utils/logger')

mongoose.set("strictQuery", false)


mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info("Connected to mongoDB")
    })
    .catch((error) => {
        logger.error("Error connecting to mongoDB", error.message)
    })

app.use("/api/exercises", exerciseRouter)

module.exports = app
