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
        returnedObject.date = convertedDate.toLocaleDateString('en-US', {day: "2-digit", month:"2-digit", year: "2-digit"})

        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model("Exercise", exerciseSchema)