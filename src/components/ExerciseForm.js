import React from "react";

const ExerciseForm = (
    {
        exercises,
        currExercise,
        currSet,
        currRep,
        currDate,
        setExercises,
        setCurrExercise,
        setCurrRep,
        setCurrSet,
        setCurrDate
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
        setExercises(
            [
                ...exercises, 
                {
                    "name": currExercise,
                    "sets": currSet,
                    "reps": currRep,
                    "date": currDate
                }
            ]
        )

        // clear input 
        setCurrExercise('')
        setCurrSet('')
        setCurrRep('')
        setCurrDate(new Date().toLocaleDateString())

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