import ExerciseRow from "./ExerciseRow"

const ExerciseGrid = () => {
    const weightEntries = 13
    return (
        <div>
            <div className='exercise-row'>
                <div className='grid-item'>Date</div>
                <div className='grid-item'>Exercise name</div>
                <div className='grid-item'>Sets</div>
                <div className='grid-item'>Reps</div>
                {[...Array(weightEntries).keys()].map((key) => (<div key={key}></div>))}
                
            </div>
            <ExerciseRow exerciseObj={{date: "5/11/20", name: "Clean and jerk", sets: "4", reps: "3"}} numSets={4}/>
        </div>
    )
}

export default ExerciseGrid