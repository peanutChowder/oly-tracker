import React from "react";

const ExerciseForm = (
    {
        MAX_SETS,
        exercises,
        currExercise,
        currSet,
        currRep,
        currDate,
        setExercises,
        setCurrExercise,
        setCurrRep,
        setCurrSet,
        setCurrDate,
        addExerciseToServer
    }
) => {

    const handleExerciseChange = (event) => {
        setCurrExercise(event.target.value)
    }

    const handleSetChange = (event) => {
        setCurrSet(event.target.value)
    }

    const handleRepChange = (event) => {
        setCurrRep(event.target.value)
    }

    const handleDateChange = (event) => {
        setCurrDate(event.target.value)
    }

    const isValidExerciseRow = (exercise, sets) => {
        // return if exercise name is only whitespace
        if (!exercise.replace(/\s/g, '').length) {
            alert("Exercise name cannot be empty")
            return false
        }
            
        // Sets must be provided and fall between 1 <= sets <= MAX_SETS
        if (!sets.replace(/\s/g, '').length) {
            alert("Must provide sets")
            return false
        } else {
            if (sets > MAX_SETS || sets < 1) {
                alert(`Number of sets must be within 1 to ${MAX_SETS}`)
                return false
            }
        }
        return true
    }

    const addExercise = (event) => {
        event.preventDefault()

        // reps and date are constrained by input
        if (!isValidExerciseRow(currExercise, currSet)) return false

        const newExercise = {
            "name": currExercise,
            "sets": currSet,
            "reps": currRep,
            "date": currDate,
            "setsWeights": Array(parseInt(currSet)).fill('0')
        }
        setExercises(
            [
                ...exercises, 
                newExercise
            ]
        )

        addExerciseToServer(newExercise)

        // clear input 
        setCurrExercise('')
        setCurrSet('')
        setCurrRep('')

        console.log(exercises)
    }

    return (
        <form onSubmit={addExercise}>
            <div className="grid-container">
                <div className='grid-item'>Exercise name</div>
                <div className='grid-item'>Sets</div>
                <div className='grid-item'>Reps</div>
                <div className='grid-item'>Date</div>
                <div className='grid-item'><input onChange={handleExerciseChange} value={currExercise}></input></div>
                <div className='grid-item'><input onChange={handleSetChange} value={currSet} type="number"></input></div>
                <div className='grid-item'><input onChange={handleRepChange} value={currRep} type="number"></input></div>
                <div className='grid-item'><input onChange={handleDateChange} value={currDate} type="date"></input></div>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default ExerciseForm