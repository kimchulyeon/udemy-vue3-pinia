<!-- 
  1. modelValue : 컴포넌트에 v-model
  2. ref로 DOM 컨트롤 
  3. template v-slot:이름 (#이름)과 <slot name="이름"></slot>
-->
<template>
  <div class="notes">
    <!-- ----공통 컴포넌트---- -->
    <TextArea
      v-model="newNote"
      ref="textAreaRef"
      placeholder="Add a new note"
      label="Add a new notes"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </TextArea>
    <!-- ---공통 컴포넌트 끝--- -->

    <!-- Note List -->
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
  /*
    imports
  */
  import { ref } from "vue";
  import Note from "@/components/note/Note.vue";
  import { useStoreNotes } from "@/store/storeNote";
  import TextArea from "../../components/note/TextArea.vue";

  /*
    store
  */
  const storeNotes = useStoreNotes();

  /*
    data
  */
  const newNote = ref("");
  const textAreaRef = ref(null);

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

    storeNotes.addNote(note);

    newNote.value = "";
    textAreaRef.value.focusTextarea();
  };
</script>
