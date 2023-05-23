import { useState } from 'react'
import './index.css'
import ExerciseForm from './components/ExerciseForm'
import ExerciseGrid from './components/ExerciseGrid'

const App = () => {
  const [exercises, setExercises] = useState([])

  const [currExercise, setCurrExercise] = useState('')
  const [currSet, setCurrSet] = useState('')
  const [currRep, setCurrRep] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', {day: "2-digit", month:"2-digit", year: "2-digit"}))

  return (
    <div>
      <h1>Oly tracker v1</h1>
      <ExerciseForm
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
      <ExerciseGrid/>
    </div>
  )
}

export default App