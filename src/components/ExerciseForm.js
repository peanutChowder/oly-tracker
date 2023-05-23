import React from "react";

const ExerciseForm = (
    {
        exercises,
        currExercise,
        currSet,
        currRep,
        setExercises,
        setCurrExercise,
        setCurrRep,
        setCurrSet
    }
) => {

    const handleExerciseChange = (event) => {
        console.log(event.target.value)
        setCurrExercise(event.target.value)
    }

    const handleSetChange = (event) => {
        console.log(event.target.value)
        setCurrSet(event.target.value)
    }

    const handleRepChange = (event) => {
        setCurrRep(event.target.value)
    }

    const addExercise = (event) => {
        event.preventDefault()
        setExercises(
            [
                ...exercises, 
                {
                    "name": currExercise,
                    "sets": currSet,
                    "reps": currRep
                }
            ]
        )

        // clear input 
        setCurrExercise('')
        setCurrSet('')
        setCurrRep('')

    }

    return (
        <form onSubmit={addExercise}>
            <div className="grid-container">
                <div className='grid-item'>Exercise name</div>
                <div className='grid-item'>Sets</div>
                <div className='grid-item'>Reps</div>
                <div className='grid-item'><input onChange={handleExerciseChange} value={currExercise}></input></div>
                <div className='grid-item'><input onChange={handleSetChange} value={currSet}></input></div>
                <div className='grid-item'><input onChange={handleRepChange} value={currRep}></input></div>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default ExerciseForm