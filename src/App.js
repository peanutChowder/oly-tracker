import { useState } from 'react'
import './index.css'
import ExerciseForm from './components/ExerciseForm'
import ExerciseGrid from './components/ExerciseGrid'

const App = () => {
  const MAX_SETS = 12
  const [exercises, setExercises] = useState([])

  const [currExercise, setCurrExercise] = useState('')
  const [currSet, setCurrSet] = useState('')
  const [currRep, setCurrRep] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', {day: "2-digit", month:"2-digit", year: "2-digit"}))

  return (
    <div>
      <h1>Oly tracker v1</h1>
      <ExerciseForm
        MAX_SETS={MAX_SETS}
        exercises={exercises}
        currExercise={currExercise}
        currSet={currSet}
        currRep={currRep}
        currDate={date}
        setExercises={setExercises}
        setCurrExercise={setCurrExercise}
        setCurrSet={setCurrSet}
        setCurrRep={setCurrRep}
        setCurrDate={setDate}
      />
      <ExerciseGrid exercises={exercises}/>
    </div>
  )
}

export default App