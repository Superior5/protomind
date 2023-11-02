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
        <div class="w-full h-full py-30px flex flex-col justify-between">
          <div class="input-wrapper flex flex-col gap-20px h-full justify-between">
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
          <button @click="createProtocol" class="btn-1 text-24px px-20px py-10px mx-auto block mt-30px">Создать
            протокол</button>
        </div>
      </div>
      <div class=" py-30px">
        <h2 class="text-base-7 font-bold text-20px mb-10px text-center">Выбрать дату</h2>
        <Calendar />
        <div class="">
          <h2 class="text-base-7 font-bold text-20px mb-10px text-center">Прикрепить файл совещания (.mp4)</h2>
          <label for="load-file"
            class="w-full relative flex gap-5px flex-col p-20px mt-30px border-2 rounded-[10px] border-base-7">
            <span>Выберите файл или перетащите сюда</span>
            <span class="whitespace-nowrap font-bold text-ellipsis overflow-hidden">
              {{ videoName }}</span>
            <input class="absolute w-full top-0 left-0 cursor-pointer opacity-0 h-full" ref="video" type="file" name=""
              id="load-file" required accept="video/mp4" @change="changeImg()">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const video = ref(null)
const videoName = ref('')
const changeImg = () => {
  videoName.value = video.value.files[0].name;
}

const createProtocol = async () => {
  try {
    const formData = new FormData();
    formData.append('file', video.value.files[0])

    const res = await fetch(`http://localhost:5100/api/addMedia`, {
      method: 'POST',
      body: formData,
    })

    console.log(res);
  } catch (error) {
    alert(error)
  }
}
</script>

<style scoped>
.input-wrapper div input {
  outline: none;
  height: 74px;
}

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
</script>