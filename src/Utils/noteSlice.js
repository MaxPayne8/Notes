import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: null,
    sure: false,
    index: null,
  },
  reducers: {
    addNote: (state, action) => {
      state.notes = action.payload;
    },
    setSure: (state, action) => {
      state.sure = action.payload;
    },
    deleteNote: (state, action) => {
      var getNotes = JSON.parse(window.localStorage.getItem("Notes"));
      const index = action.payload;

      getNotes = getNotes.filter((note) => note.id !== index);
      localStorage.setItem("Notes", JSON.stringify(getNotes));
    },
    updateCard: (state, action) => {
      const { id, title, description } = action.payload;

      var getNotes = JSON.parse(window.localStorage.getItem("Notes"));
      const index = getNotes.findIndex((note) => note.id === id);
      getNotes[index].description = description;
      getNotes[index].title = title;
      window.localStorage.setItem("Notes", JSON.stringify(getNotes));
    },
    addIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const { addNote, setSure, deleteNote, updateCard, addIndex } =
  noteSlice.actions;

export default noteSlice.reducer;
