<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        type="text"
        class="form-control"
        id="title"
        v-focus
        v-color="'blue'"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="content"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex mt-4 gap-2">
      <slot name="actions"></slot>
    </div>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});
defineEmits(['update:title', 'update:content']);

// 로컬 디렉티브
// const vFocus = {
//   mounted(el) {
//     el.focus();
//   },
// };
</script>

<style lang="scss" scoped></style>
