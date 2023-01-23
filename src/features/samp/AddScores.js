import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScoresAsync } from './sampSlice';

const AddScores = () => {
  const dispatch = useDispatch();
  const [student_name, setstudent_name] = useState("")
  const [math, setmath] = useState(null)
  const [english, setenglish] = useState(null)
  const [computer, setcomputer] = useState(null)
  return (
    <div>

      Add new scores to system:
      <br></br>
      <br></br>

      student name:<input onChange={(e) => setstudent_name(e.target.value)} />
      score's math:<input onChange={(e) => setmath(e.target.value)} />
      <br/>
      score's english:<input onChange={(e) => setenglish(e.target.value)} />
      score's computer:<input onChange={(e) => setcomputer(e.target.value)} />
      <button onClick={() => dispatch(addScoresAsync({ student_name, math, english , computer}))} >Add scores</button>
      <hr></hr>
    </div>
  )
}

export default AddScores