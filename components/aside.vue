<template>
  <div
    class="w-sm h-screen duration-1000 bg-base-0"
    :class="hide ? 'hide' : 'show'"
  >
    {{ a }}
    <h1>боковое меню</h1>
      <button @click="hideAside" class="text-30px fixed left-400px duration-500" :class="hide ? 'button-rotate' : ''">❮❮❮</button>
  </div>
</template>

<script setup>
const hide = ref(false);

const hideAside = () => {
  hide.value = hide.value ? false : true;
};
</script>

<style scoped>
.hide {
  transform: translate(-100%);
}

.button-rotate {
    transform: rotate(180deg);
}

</style>