<!-- 
  1. 공통 컴포넌트 : <slot name=""></slot>
  2. 유동적으로 바뀌어야할 부분은 props로 받는다.
  3. modelValue | update:modelValue : v-model - v-model : get(){} | set(){}
-->
<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
    <label class="label has-text-white" v-if="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          v-model="model"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  /*
    imports
  */
  import { computed, ref } from "@vue/runtime-core";

  /*
    data
  */
  const textareaRef = ref(null);

  /*
    props & emit
  */
  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      default: "success",
    },
    placeholder: {
      type: String,
      default: "Type something...",
    },
    label: {
      type: String,
    },
  });
  const emit = defineEmits(["update:modelValue"]);

  /*
    ✅ computed : modelValue | update:modelValue
  */
  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      return emit("update:modelValue", value);
    },
  });

  /*
    methods
  */
  const focusTextarea = () => {
    textareaRef.value.focus();
  };

  /*
    defineExpose : 상위컴포넌트에서 하위컴포넌트 접근
  */
  defineExpose({
    focusTextarea,
  });
</script>
