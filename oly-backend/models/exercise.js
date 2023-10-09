const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    date: Date,
    name: String,
    sets: Number,
    reps: Number,
    setsWeights: [String]
})

exerciseSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()

        const convertedDate = new Date(returnedObject.date)
        returnedObject.date = convertedDate.toISOString().substring(0, 10)

        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Exercise", exerciseSchema)