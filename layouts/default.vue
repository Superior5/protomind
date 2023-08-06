<template>
  <div class="flex">
    <Aside  @search-input-emit="search"/>

    <div>
      <slot />
    </div>


  </div>
</template>

<script>
</script>

<style>
</style>