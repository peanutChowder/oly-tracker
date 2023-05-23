const ExerciseGrid = () => {
    const weightEntries = 13
    return (
        <div className='exercise-row'>
            <div className='grid-item'>Date</div>
            <div className='grid-item'>Exercise name</div>
            <div className='grid-item'>Sets</div>
            <div className='grid-item'>Reps</div>
            {[...Array(weightEntries).keys()].map((key) => (<div key={key}></div>))}
        </div>
    )
}

export default ExerciseGrid