<template>
  <div class="flex w-full px-20px">
    <div class="h-screen w-1/2">
      <h1 class="text-3xl font-bold mb-30px">Создать аккаунт:</h1>
      <div class="input-block children:text-xl">
        <div>
          <input type="text" placeholder="Укажите ФИО" name="" id="" />
        </div>
        <div>
          <input type="text" placeholder="Укажите email" name="" id="" />
        </div>
        <div>
          <input type="text" placeholder="Придумайте пароль" name="" id="" />
        </div>
        <div>
          <input type="password" placeholder="Повторите пароль" name="" id="" />
        </div>
        <div>
          <select class="children:text-xl mb-30px" name="" id="">
            <option value="-1" selected disabled hidden>Укажите роль</option>
            <option value="1">Менеджер</option>
            <option value="2">Секретарь</option>
          </select>
        </div>

        <div>
          <button
            class="btn-text h-40px text-xl w-1/3 rounded-[11px] mt-10px w-full bg-base-7 cursor-pointer"
          >
            Создать пользователя
          </button>
        </div>
      </div>
    </div>

    <div class="h-screen w-1/2">
      <div>
        <h1 class="text-3xl font-bold">Список пользователей</h1>
      </div>
      <div class="w-full pt-30px flex flex-col">
        <SearchBar />
      </div>

      <div
        class="children:(text-center bg-rarly-5 rounded-[10px] pr-25px w-1/2 flex justify-between items-center mt-30px text-base-7 text-sm)"
        v-for="item in elems"
        :key="item.id"
      >
        <div class="">
          <img src="@/assets/member.png" alt="" class="w-100px" />

          <p class="text-2xl">Иванов Иван Иванович</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input-block input,
select {
  @apply h-40px text-xl w-1/2 rounded-[11px] mb-10px bg-[#F8F1FF] p-5px outline-none mb-30px;
}

.btn-text {
  color: #fff;
  text-align: center;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>

<script setup>


const elems = ref([
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  }
]);
</script>
