import { MY_STUDENT_SERVER,MY_SCORE_SERVER } from '../../app/env'
import axios from 'axios'


export async function getScores()
{
    return await axios.get(MY_SCORE_SERVER).then(res => res.data);
  
}


export async function addStudents(sname, email)
{
    return await axios.post(MY_STUDENT_SERVER,
        { "sname": sname, "email": email }).then(res => res.data);
}

export async function addScores(student_name, math, english, computer)
{
    return await axios.post(MY_SCORE_SERVER,
        { "student_name": student_name, "math": math , "english":english, "computer": computer  }).then(res => res.data);
}
// export async function delStudent(id) 
// {
//     return await axios.delete(MY_SERVER + "/" + id).then(res => id);
// }

// export async function updStudent(description, sName, id)
// {
//     return await axios.put(MY_SERVER + "/" + id,
//      { "description": description, "sName": sName }).then(res => (res.data ))
// }

