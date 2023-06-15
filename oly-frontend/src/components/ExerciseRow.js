const ExerciseRow = ({exerciseObj, allExercises, setExercises, updateExerciseServer, fetchExercisesFromServer}) => {
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
        console.log(updatedExercises)
        setExercises(updatedExercises)
        updateExerciseServer(exerciseObj.id, updatedExerciseObj)
    }

    return (
        <div className='exercise-row'>
            <span className='grid-item date'>{exerciseObj.date}</span>
            <span className='grid-item exercise'>{exerciseObj.name}</span>
            <span className='grid-item sets'>{exerciseObj.sets}</span>
            <span className='grid-item reps'>{exerciseObj.reps}</span>
            <div className='weight-input-container'>
                {exerciseObj.setsWeights.map((set, index) => (
                    <input className='weight-input grid-item' data-setnum={index} key={index} value={set} onChange={handleSetWeightChange}></input>
                ))}
            </div>
        </div>
    )
}

export default ExerciseRow