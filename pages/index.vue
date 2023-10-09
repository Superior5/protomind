<template>
  <div class="w-full h-screen flex justify-center items-center">
      <h1 class="text-3xl font-bold"> Проверка...</h1>
  </div>
</template> 

<script setup>
const router = useRouter();

  setTimeout(()=> {
    router.push('auth')
  },2000)
</script>

<style scoped>

</style>