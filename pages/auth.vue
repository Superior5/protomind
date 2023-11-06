<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div
      class="auth-wrapper max-w-450px w-full mx-10px h-500px rounded-[30px] flex items-center border-20px border-base-7 bg-base-1">
      <div class="max-w-260px mx-auto w-full flex flex-col justify-center items-center px-10px">
        <h1 class="text-2xl w-full mb-10px">Войти</h1>
        <div
          class="input-block flex flex-col w-full children:(h-40px w-full rounded-[11px] mb-10px bg-[#F8F1FF] p-5px outline-none)">
          <input v-model="email" class="" placeholder="Email" type="text" />
          <input v-model="password" class="" placeholder="Пароль" type="password" />
        </div>
        <div class="h-40px rounded-[11px] flex items-center w-full">
          <input class="bg-[#F8F1FF] mr-10px" type="checkbox" name="" id="remember" />
          <label for="remember">Запомнить меня</label>
        </div>
        <div @click="authUser" class="w-full">
          <input :disabled="load"
            class="btn-text disabled:opacity-50 h-40px rounded-[11px] mt-10px w-full bg-base-7 cursor-pointer"
            type="button" value="Войти" />
        </div>
      </div>
    </div>
    <video @play="setTime(30)" ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script setup>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { jwtDecode } from "jwt-decode";

const videoPlayer = ref(null);
let player = null;
const videoOptions = ref({
  autoplay: true,
  controls: true,
  height: 500,
  sources: [
    {
      src:
        '/video1.mp4',
      type: 'video/mp4'
    }
  ]
})

const setTime = (seconds) => {
  if (player) {
    player.currentTime(seconds);
  }
};

onMounted(() => {
  player = videojs(videoPlayer.value, videoOptions.value, () => {
    player.log('onPlayerReady', this);
  });
});

onBeforeUnmount(() => {
  if (player) {
    player.dispose();
  }
});

const state = useDataStore();
const password = ref('')
const email = ref('')
const load = ref(false)

const authUser = async () => {
  if (!password.value || !email.value) return alert("Заполните все поля!")
  load.value = true

  const res = await fetch(`http://localhost:5100/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: password.value,
      login: email.value
    }),
  })

  const data = await res.json()
  if (res.status != 200) return alert(data.message)

  state.tokenAuth = data.token

  const cookieToken = useCookie('tokenAuth')
  cookieToken.value = data.token

  state.userInfo = jwtDecode(data.token)

  alert("Пользователь успешно добавлен")
  navigateTo('/lk')
  load.value = false
}
</script>

<style scoped>
.btn-text {
  color: #fff;
  text-align: center;
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>
