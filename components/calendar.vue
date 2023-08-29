<script setup lang="ts">
const date = ref(new Date());

const props = defineProps(["dates"]);

const { dates } = toRefs(props);

const attrs = ref([
  {
    key: "today",
    highlight: {
      color: "green",
      fillMode: "solid",
    },
    dates
  },
]);
</script>

<template>
  <div class="w-full">
    <client-only>
      <VDatePicker expanded v-model="date" :attributes="attrs" />
    </client-only>
  </div>
</template>