const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')

exerciseRouter.get("/", async (request, response, next) => {
    const exercises = await Exercise.find({})

    response.json(exercises)
})

exerciseRouter.get("/:id", (request, response, next) => {
    Exercise.findById(request.params.id)
        .then(exercise => {
            if (exercise) {
                response.json(exercise)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

exerciseRouter.post("/", async (request, response, next) => {
    const exercise = new Exercise(request.body)

    try {
        const result = await exercise.save()
        response.status(201).json(result)
    } catch (exception) {
        next(exception)
    } 
})

module.exports = exerciseRouter
