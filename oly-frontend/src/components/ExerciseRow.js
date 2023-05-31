const ExerciseRow = ({exerciseObj, allExercises, setExercises}) => {
    const handleSetWeightChange = (event) => {
        console.log("Selected index", event.target.dataset.setnum)
        console.log("value", event.target.value)

        const newSetWeights = exerciseObj.setsWeights.map((weight, i) => {
            if (i == event.target.dataset.setnum) {
                return event.target.value
            }
            return weight
        })

        const updatedExerciseObj = {
            ...exerciseObj,
            setsWeights: newSetWeights
        }
        const updatedExercises = allExercises.map((exercise) => {
            if (exercise.name == updatedExerciseObj.name && exercise.date == updatedExerciseObj.date) {
                return updatedExerciseObj
            }
            return exercise
        })
        setExercises(updatedExercises)
    }
    console.log("allExercises", allExercises)
    return (
        <div className='exercise-row'>
            <div className='grid-item'>{exerciseObj.date}</div>
            <div className='grid-item'>{exerciseObj.name}</div>
            <div className='grid-item'>{exerciseObj.sets}</div>
            <div className='grid-item'>{exerciseObj.reps}</div>
            {[...Array(parseInt(exerciseObj.sets)).keys()].map((key) => (
                <input data-setnum={key} key={key} onChange={handleSetWeightChange}></input>
            ))}
        </div>
    )
}

export default ExerciseRow