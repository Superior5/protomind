<template>
  <div>
    <div class="header">
      <header>
        <div class="h-51px bg-base-8 rounded-[11px] text-base-7 mt-26px mb-36px">
          <h2>Добавить протокол</h2>
        </div>
      </header>
    </div>
    <div class="flex children:(w-1/2 h-[70vh])">
      <div class="mr-68px">
        <div class="w-full h-full py-30px">
            <div class="flex flex-col gap-20px">
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Тема</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Повестка</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Секретарь</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Руководитель</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
            </div>
            <button class="btn-1 text-24px px-20px py-10px mx-auto block mt-30px">Создать протокол</button>
         </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<style scoped>
header h2 {
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
}
.protocol-form p {
  @apply text-xl font-bold mb-10px;
}

.protocol-form input {
  @apply outline-none w-1/2 p-10px border-base-0 border-opacity-20 border-1 rounded-25px;
}
</style>

<script setup>
const store = useDataStore()
</script>