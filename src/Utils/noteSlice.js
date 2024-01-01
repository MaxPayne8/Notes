import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: null,
    sure: false,
    index: null,
    myCards: true,
    sampleCards: true,
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

      //   state.cards[index].author = author;
      //   state.cards[index].download_url = download_url;
      //   state.cards[index].description = description;
    },
    addIndex: (state, action) => {
      state.index = action.payload;
    },
    showSampleCard: (state, action) => {
      state.myCards = action.payload;
    },
    showMyCards: (state, action) => {
      state.sampleCards = action.payload;
    },
  },
});

export const {
  addNote,
  setSure,
  deleteNote,
  updateCard,
  addIndex,
  showMyCards,
  showSampleCard,
} = noteSlice.actions;

export default noteSlice.reducer;
