<template>
  <div class="edit-note">
    <!-- ----공통 컴포넌트---- -->
    <TextArea
      v-model="noteContent"
      ref="textAreaRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit note"
    >
      <template #buttons>
        <button
          @click="saveNoteHandler"
          class="button is-link has-background-link mr-3"
          :disabled="!noteContent"
        >
          Save Note
        </button>
        <button class="button is-link is-light" @click="$router.back()">
          Cancel
        </button>
      </template>
    </TextArea>
    <!-- ---공통 컴포넌트 끝--- -->
  </div>
</template>

<script setup>
/*
  imports
*/
import TextArea from "@/components/note/TextArea.vue";
import { ref } from "@vue/reactivity";
import { useStoreNotes } from "@/store/storeNote";
import { useRoute, useRouter } from "vue-router";
/*
  router
*/
const route = useRoute();
const router = useRouter();

/*
  store
*/
const storeNotes = useStoreNotes();

/*
  data
*/
const noteContent = ref("");
noteContent.value = storeNotes.getNoteContent(route.params.id);

/*
  methods
*/
const saveNoteHandler = () => {
  // let payload = {
  //   id: route.params.id,
  //   content: noteContent.value,
  // };
  storeNotes.updateNote(route.params.id, noteContent.value);
  router.push("/");
};
</script>
