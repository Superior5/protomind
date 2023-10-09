<template>
  <div>
    <span
      class="inline-block text-center align-middle"
      :class="statuses[status].title"
      >{{ statuses[status].content }}</span
    >
  </div>
</template>

<script setup>
const props = defineProps(["status"]);

const statuses = ref({
  1: {
    title: "progress",
    content: "В процессе",
  },
  2: {
    title: "finished",
    content: "Готово",
  },
});
</script>

<style>
.progress {
  
  @apply text-base-7;
}
.finished {
  @apply text-rarly-1;

}
</style>