<template>
  <div class="w-full">
    <div class="w-full flex justify-center mb-15px">
      <header class="w-[80%] h-51px bg-base-8 rounded-[11px] mt-26px">
        <div class="flex justify-between">
          <div class="ml-100px flex items-center">
            <h2 class="">Протоколы</h2>
          </div>
          <div class="flex">
            <h2 class="mr-100px flex items-center">Создать новый протокол</h2>
            <div v-if="state.userInfo.role != 'ADMIN'" class="flex items-center mt-7px mr-7px mb-7px cursor-pointer"
              @click="isOpen = true">
              <img src="@/assets/plus.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="list-wrap w-[80%] my-0 mx-auto">
      <div class="list-header w-full flex justify-evenly">
        <div class="w-2/7 flex justify-center">
          <h2>Тема</h2>
        </div>
        <div>
          <h2>Секретарь</h2>
        </div>
        <div>
          <h2>Дата</h2>
        </div>
        <div>
          <h2>№Протокола</h2>
        </div>
        <div>
          <h2>Статус</h2>
        </div>
      </div>
      <div class="list-body mt-15px">
        <nuxt-link :to="'protocols/' + protocol._id"
          class="list-element w-full cursor-pointer hover:opacity-50 mb-14px bg-base-8 rounded-[11px] h-82px flex justify-evenly"
          v-for="protocol in state.protocols" :key="protocol._id">
          <div class="theme w-2/7">{{ protocol.topic }}</div>
          <div class="secretary">{{ protocol.secretary.name }}</div>
          <div class="date">{{ new Date(protocol.date).toLocaleString("ru") }}</div>
          <div class="number">{{ protocol._id }}</div>
          <div class="status"><status-label :status="1" /></div>
        </nuxt-link>
      </div>
    </div>
    <div v-if="isOpen" class="absolute top-0 right-0 w-[100%] h-[100%] flex justify-center items-center modal-cover"
      @click="isOpen = false">
      <div class=" w-[90%] h-[90%] bg-base-1 opacity-100 rounded-[26px] px-85px relative" @click.stop>
        <h1 class="absolute top-26px font-bold select-none right-115px bg-[#e43e3e] text-[white] cursor-pointer p-14px"
          @click="isOpen = false">X</h1>
        <new-protocol @close="isOpen = false" />
      </div>
    </div>
    <div v-if="state.preloader" class="preloader">
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor"
          d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z">
        </path>
      </svg>
      Видео загружается и обрабатывается....
    </div>
  </div>
</template>

<script setup>
const state = useDataStore();
const isOpen = ref(false);

const res = await fetch(`http://80.90.186.17:5100/api/getProtocols`, {
  headers: { 'Authorization': 'Bear ' + state.tokenAuth }
})
state.protocols = (await res.json()).protocols
state.protocols.forEach(el => {
  el.secretary = JSON.parse(el.secretary)
})
</script>

<style scoped>
.modal-cover {
  background-color: rgba(0, 0, 0, 0.5);
}

.list-element div {
  width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-element .theme {
  @apply w-2/7;
}

.list-header h2 {
  @apply text-17px text-center text-base-7 font-bold w-120px;
}

header h2 {
  @apply text-24px text-center text-base-7 font-bold;
}

i {
  margin-right: 30px;
}

.icon-color {
  color: hwb(0 24% 11%);
}

.one {
  background-image: linear-gradient(to top,
      #1c3ddd,
      #9c00b9,
      #cc008e,
      #e10062,
      #e21c3a);
}

.two {
  background-image: linear-gradient(to top,
      #039115,
      #19a12d,
      #28b241,
      #35c354,
      #41d468);
}

.three {
  background-image: linear-gradient(to top,
      #dd3c28,
      #df3c2d,
      #e13c32,
      #e23c37,
      #e43c3c);
}

.four {
  background-image: linear-gradient(to top,
      #72eb56,
      #73e950,
      #75e84a,
      #76e643,
      #78e43c);
}

.preloader {
  @apply fixed top-0 left-0 w-full flex flex-col items-center justify-center gap-30px h-full text-base-1 bg-base-2/50 z-20;
}

.preloader svg {
  @apply w-80px;
  animation: preloader-rotate 2s infinite linear;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>