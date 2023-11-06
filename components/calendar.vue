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
    dates,
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


<style>
.vc-title span {
  --tw-text-opacity: 1;
  color: rgba(113, 48, 163, var(--tw-text-opacity));
  font-size: 20px;
  font-weight: bold;
}

.vc-header {
  margin-bottom: 10px;
}

.vc-highlight,
.vc-day-content {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.vc-highlight-content-solid {

  color: white !important;
}

.vc-day {
  min-height: 52px;

}

.vc-container {
  border: none;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(215, 233, 255, 1) 100%);


}

.vc-day-content {
  font-size: 20px;
  font-weight: bold;
  color: #3eb1b8;
}
</style>