<template>
  <div class="w-full h-screen flex justify-center items-center bg-base-7">
    <div
      class="auth-wrapper max-w-450px w-full mx-10px h-500px rounded-[30px] flex items-center bg-base-1"
    >
      <div
        class="max-w-260px mx-auto w-full flex flex-col justify-center items-center px-10px"
      >
        <h1 class="text-2xl w-full mb-10px">Войти</h1>

        <div
          class="input-block flex flex-col w-full children:(h-40px w-full rounded-[11px] mb-10px bg-[#F8F1FF] p-5px outline-none)"
        >
          <input class="" placeholder="Email" type="text" />
          <input class="" placeholder="Пароль" type="password" />
        </div>
        <div class="h-40px rounded-[11px] flex items-center w-full">
          <input
            class="bg-[#F8F1FF] mr-10px"
            type="checkbox"
            name=""
            id="remember"
          />
          <label for="remember">Запомнить меня</label>
        </div>
        <nuxt-link to="/lk" class="w-full">
          <input
            class="btn-text h-40px rounded-[11px] mt-10px w-full bg-base-7 cursor-pointer"
            type="button"
            value="Войти"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

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

<script setup>
</script>
