<template>
  <div>
    <span
      class="inline-block text-center rounded-3xl align-middle w-100px h-25px"
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
    content: "В работе",
  },
  2: {
    title: "finished",
    content: "Готово",
  },
});
</script>


<style>
.progress {
  background: red;
  color: white;
}
.finished {
  background: rgb(16, 183, 16);
}
</style>