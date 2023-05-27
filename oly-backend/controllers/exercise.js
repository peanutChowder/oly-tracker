const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')

exerciseRouter.get("/", async (request, response) => {
    const exercises = await Exercise.find({})

    response.json(exercises)
})

exerciseRouter.post("/", async (request, response) => {
    const exercise = new Exercise(request.body)

    const result = await exercise.save()

    response.status(201).json(result)
})

module.exports = exerciseRouter
