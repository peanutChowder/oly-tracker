import ExerciseRow from "./ExerciseRow"

const ExerciseGrid = ({exercises, setExercises, updateExerciseServer}) => {
    const weightEntries = 12
    return (
        <div>
            <div className='exercise-row'>
                <div className='grid-item date'>Date</div>
                <div className='grid-item exercise'>Exercise</div>
                <div className='grid-item sets'>Sets</div>
                <div className='grid-item reps'>Reps</div>
                {[...Array(weightEntries).keys()].map((key) => (<div key={key}></div>))}
                
            </div>
            {exercises.map((exercise, i) => (
                <ExerciseRow key={i}
                exerciseObj={exercise}
                allExercises={exercises}
                setExercises={setExercises}
                updateExerciseServer={updateExerciseServer}
                />
            ))}
        </div>
    )
}

export default ExerciseGrid