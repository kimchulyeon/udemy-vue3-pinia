import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  /*
    state
  */
  state: () => {
    return {
      notes: [],
    };
  },
  /*
    actions
  */
  actions: {
    addNote(note) {
      this.notes.unshift(note);
    },

    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },

    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
  },
  /*
    getters
  */
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id === id;
        })[0].content;
      };
    },

    totalNotesCount: (state) => {
      return state.notes.length;
    },

    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
