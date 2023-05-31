const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')
const logger = require('../utils/logger')

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

exerciseRouter.put("/:id", async (request, response, next) => {
    const updatedExercise = await Exercise.findByIdAndUpdate(
        request.params.id, 
        request.body, 
        {new: true, runValidators: true}
    )

    if (updatedExercise === null) {
        logger.error(`PUT request failed on id '${request.params.id}'`)
        return response.status(404).json({error: `Exercise does not exist: '${request.body}'`})
    }

    response.status(204).json(request.body)
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
