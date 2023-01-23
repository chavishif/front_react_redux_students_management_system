import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudentsAsync } from './sampSlice';

const AddStudent = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("")
  const [sname, setsname] = useState("")
  return (
    <div>

      Add a new Student to system:
      <br></br>
      <br></br>

      Add email:<input onChange={(e) => setemail(e.target.value)} />
      Add name:<input onChange={(e) => setsname(e.target.value)} />
      <button onClick={() => dispatch(addStudentsAsync({ sname, email }))} >Add student</button>
<hr></hr>
    </div>
  )
}

export default AddStudent