import { useEffect, useState } from 'react'
import exerciseService from './services/exercises'

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

  const fetchExercisesFromServer = async () => {
    const response = await exerciseService.getAll()
    console.log("GET all from server:", response.data)
    setExercises(response.data)
  }

  useEffect( () => {
    fetchExercisesFromServer()
  }, [currExercise])

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
        addExerciseToServer={exerciseService.create}
      />
      <ExerciseGrid 
        exercises={exercises}
        setExercises={setExercises}
        updateExerciseServer={exerciseService.update}
      />
    </div>
  )
}

export default App