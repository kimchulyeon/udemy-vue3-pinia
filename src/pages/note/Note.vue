<template>
  <div class="notes">
    <!-- INPUT -->
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <!-- Card List -->
    <div v-for="(note, idx) in notes" class="card mb-4" :key="note.id">
      <div class="card-content">
        <div class="content">{{ note.content }}</div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a
          href="#"
          class="card-footer-item has-text-danger"
          @click="deleteNote(idx)"
          >Delete</a
        >
      </footer>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";

/*
  data
*/
const notes = ref([]);
const newNote = ref("");
const newNoteRef = ref(null);

/*
  methods
*/
const addNote = () => {
  const currentTime = new Date().getTime();
  const id = currentTime.toString();
  const note = {
    id,
    content: newNote.value,
  };

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};
const deleteNote = (id) => {
  notes.value.splice(id, 1);
};
</script>
