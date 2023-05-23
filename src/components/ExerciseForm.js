import React from "react";

const ExerciseForm = (
    {
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

    const handleSubmit = (event) => {
        setExercises()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid-container">
                <div className='grid-item'>Exercise name</div>
                <div className='grid-item'>Sets</div>
                <div className='grid-item'>Reps</div>
                <div className='grid-item'><input onChange={handleExerciseChange}></input></div>
                <div className='grid-item'><input onChange={handleSetChange}></input></div>
                <div className='grid-item'><input onChange={handleRepChange}></input></div>
            </div>
        </form>
    )
}

export default ExerciseForm