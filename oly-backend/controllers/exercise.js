const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')
const logger = require('../utils/logger')

exerciseRouter.get("/", async (request, response, next) => {
    const exercises = await Exercise.find({})

    return response.json(exercises)
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
    if (request.params.id === "undefined") {
        logger.error(`Received 'undefined' as exercise id`)
        return response.status(404).json({error: `Received 'undefined' as exercise id`})
    }
    
    try {
        const updatedExercise = await Exercise.findByIdAndUpdate(
            request.params.id, 
            request.body, 
            {new: true, runValidators: true, omitUndefined: true}
        )

        if (updatedExercise === null) {
            logger.error(`PUT request failed on id '${request.params.id}'`)
            return response.status(404).json({error: `Exercise does not exist: '${request.body}'`})
        }
    
        response.status(204).json(request.body)
    } catch (exception) {
        next(exception)
    }


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
