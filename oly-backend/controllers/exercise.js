const exerciseRouter = require('express').Router()
const Exercise = require('../models/exercise')
const logger = require('../utils/logger')

exerciseRouter.get("/", async (request, response) => {
    const exercises = await Exercise.find({})

    return response.json(exercises)
})

exerciseRouter.get("/:id", async (request, response) => {
    const exercise = await Exercise.findById(request.params.id)
    response.json(exercise)
})

exerciseRouter.put("/:id", async (request, response) => {
    if (request.params.id === "undefined") {
        logger.error(`Received 'undefined' as exercise id`)
        return response.status(404).json({error: `Received 'undefined' as exercise id`})
    }
    
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



})

exerciseRouter.post("/", async (request, response) => {
    const exercise = new Exercise(request.body)

    const result = await exercise.save()
    response.status(201).json(result)

})

module.exports = exerciseRouter
