<template>
  <div class="h-80vh my-auto w-full flex flex-col">
    <div class="flex justify-between">
      <h1 class="text-center text-3xl font-extrabold mb-20px">
        Добавление протокола
      </h1>
      <Icon
        class="text-40px text-base-6 cursor-pointer"
        name="material-symbols:cancel-presentation"
      />
    </div>
    <div class="flex">
      <div class="w-1/2">
        <div class="protocol-form">
          <div>
            <p class="text-xl font-bold mb-10px">Тема совещания</p>
            <input
              class="outline-none w-1/2 p-10px border-base-0 border-opacity-20 border-1 rounded-25px"
              type="text"
              placeholder="Введите тему совещания"
            />
          </div>
          <div>
            <p>Повестка</p>
            <input type="text" placeholder="Введите повестку" />
          </div>
          <div>
            <p>Секретарь</p>
            <InputSelect />
          </div>
          <div>
            <p>Председательствующий</p>
            <InputSelect />
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div>
          <Calendar />
        </div>
        <div>
          <p class="text-xl my-10px">Файл совещания</p>
          <InputFile />
        </div>
      </div>
    </div>
    <div class="h-full flex items-end">
      <button
        
        class="bg-rarly-1 text-base-1 p-20px text-center rounded-4px text-16px"
      >
        Создать протокол  
      </button>
    </div>
  </div>
</template>

<style scoped>
.protocol-form p {
  @apply text-xl font-bold mb-10px;
}

.protocol-form input {
  @apply outline-none w-1/2 p-10px border-base-0 border-opacity-20 border-1 rounded-25px;
}
</style>

<script setup>
</script>