// todo: create this thing so that each row can have varying cell lengths.
// we will use inline styles to do this

const ExerciseRow = ({exerciseObj, numSets}) => {
    const colWidth = (100 / numSets).toString() + '% '
    const cssCols = colWidth.repeat(numSets)
    const rowStyle = {
        display: "grid",
        gridTemplateColumns: cssCols
    }
    console.log(rowStyle)
    return (
        <div className='exercise-row'>
            <div className='grid-item'>{exerciseObj.date}</div>
            <div className='grid-item'>{exerciseObj.name}</div>
            <div className='grid-item'>{exerciseObj.sets}</div>
            <div className='grid-item'>{exerciseObj.reps}</div>
            {[...Array(numSets).keys()].map((key) => (<input key={key}></input>))}
        </div>
    )
}

export default ExerciseRow