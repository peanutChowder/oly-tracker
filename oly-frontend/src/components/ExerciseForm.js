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

    const addExercise = (event) => {
        event.preventDefault()
        if (currSet > MAX_SETS) {
            console.log("Exceeding maximum sets. Did not add exercise")
            return
        }

        const newExercise = {
            "name": currExercise,
            "sets": currSet,
            "reps": currRep,
            "date": currDate,
            "setsWeights": Array(parseInt(currSet)).fill(0)
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
                <div className='grid-item'><input onChange={handleSetChange} value={currSet}></input></div>
                <div className='grid-item'><input onChange={handleRepChange} value={currRep}></input></div>
                <div className='grid-item'><input onChange={handleDateChange} value={currDate}></input></div>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default ExerciseForm