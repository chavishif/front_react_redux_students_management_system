import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getScores, addStudents, addScores } from './sampAPI';

const initialState = {
  value: 0,
  status: 'idle',
  students: [],
  scores: [],
  update: false
};

export const getScoresAsync = createAsyncThunk(
  'samp/getScores',
  async () => {
    const response = await getScores();
    return response;
  }
);
// export const delStudentsAsync = createAsyncThunk(
//     'samp/delStudent',
//     async (id) => {
//       const response = await delStudent(id);
//       return response;
//     }
//   );

export const addStudentsAsync = createAsyncThunk(
  'samp/addStudents',
  async (student) => {
    const response = await addStudents(student.sname, student.email);
    return response;
  }
);

export const addScoresAsync = createAsyncThunk(
  'samp/addScores',
  async (score) => {
    const response = await addScores(score.student_name, score.math, score.english, score.computer);
    return response;
  }
);
// export const UpdStudentsAsync = createAsyncThunk(
//   'samp/updStudent',
//   async (student) => {
//     const response = await updStudent(student.description,student.sName,student.id);
//     console.log(response)
//     return response;
//   }
// );

export const sampSlice = createSlice({
  name: 'samp',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getScoresAsync.fulfilled, (state, action) => {
        state.scores = action.payload

  })
  
          .addCase(addScoresAsync.fulfilled, (state, action) => {
    state.scores = action.payload;

  })
    .addCase(addStudentsAsync.fulfilled, (state, action) => {
      state.students.push(action.payload);

    })
  // .addCase(delStudentsAsync.fulfilled, (state, action) => {
  //   state.students=state.students.filter (stu =>  stu.id !== action.payload);

  // }).addCase(UpdStudentsAsync.fulfilled, (state, action) => {
  //   console.log(action.payload)
  //   state.update =! state.update
  // });
},
});

export const { } = sampSlice.actions;
export const selectStudents = (state) => state.samp.students;
export const selectUpdate = (state) => state.samp.update;
export const selectScores = (state) => state.samp.scores;
export default sampSlice.reducer;
