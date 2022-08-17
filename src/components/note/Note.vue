<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/edit/${note.id}`" class="card-footer-item">
        Edit
      </RouterLink>
      <a
        href="#"
        class="card-footer-item has-text-danger"
        @click="storeNotes.deleteNote(props.note.id)"
      >
        Delete
      </a>
    </footer>
  </div>
</template>

<script setup>
/*
  imports
*/
import { computed } from "vue";
import { useStoreNotes } from "@/store/storeNote";

/*
  store
*/
const storeNotes = useStoreNotes();

/*
  props & emits
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/*
  computed
*/
const characterLength = computed(() => {
  const LENGTH = props.note.content.length;
  let desc = LENGTH > 1 ? "characters" : "character";
  return `${LENGTH} ${desc}`;
});

/*
  methods
*/
</script>
