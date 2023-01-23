import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStudents, selectUpdate, selectScores, getScoresAsync } from './sampSlice';

export function Samp() {
    const scores = useSelector(selectScores);
    const dispatch = useDispatch();
    const [showScores, setShowScores] = useState(false);
    const [student_name, setstudent_name] = useState("")
    const [filterByName, setFilterByName] = useState(false);



    const handleGetAllScores = () => {
        dispatch(getScoresAsync());
        setShowScores(true);
        setFilterByName(false);
    }
    
    const handleFilterScores = () => {
        dispatch(getScoresAsync());
        setShowScores(true);
        setFilterByName(true);
    }
    
    return (
        <div>
            find by name of student:
            <input onChange={(e)=> setstudent_name(e.target.value)}></input>
            <br></br>
            <button onClick={handleGetAllScores}>Get all the scores</button>
            <button onClick={handleFilterScores}>Filter scores by student name</button>
            {showScores && scores.length > 0 && (filterByName ? 
            scores.filter(score => score.student_name === student_name).map((score, i) => (
                    <div key={i}>
                        student name: {score.student_name},
                        {" "} math's score: {score.math}, {"  "} ,english's score: {score.english} ,
                         computer's score: {score.computer}
                    </div>
                )) : scores.map((score, i) => (
                    <div key={i}>
                        student name: {score.student_name},
                        {" "} math's score: {score.math}, {"  "} english's score: {score.english} ,
                         computer's score: {score.computer}
                    </div>
                )))}
        </div>
    )
                }
      
 
        

    
     
