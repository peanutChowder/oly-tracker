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
// TODO: leftoff here -> why are the exercise name sizes not changing? 
    return (
        <div className='exercise-row'>
            <span className='grid-item date'>{exerciseObj.date}</span>
            <span className='grid-item exercise'>{exerciseObj.name}</span>
            <span className='grid-item sets'>{exerciseObj.sets}</span>
            <span className='grid-item reps'>{exerciseObj.reps}</span>
            <div className='weight-input-container'>
                {[...Array(parseInt(exerciseObj.sets)).keys()].map((key) => (
                    <input className='weight-input' data-setnum={key} key={key} onChange={handleSetWeightChange}></input>
                ))}
            </div>
        </div>
    )
}

export default ExerciseRow