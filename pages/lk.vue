<template>
  <div class="flex w-full py-26px px-20px">
    <div class="h-screen w-1/2">
      <h1 class="text-3xl font-bold mb-30px">Создать аккаунт:</h1>
      <div class="input-block children:text-xl">
        <div>
          <input required v-model="fullName" type="text" placeholder="Укажите ФИО" name="" id="" />
        </div>
        <div>
          <input required v-model="idUser" type="text" placeholder="Укажите ник (должен быть уникальным)" name="" id="" />
        </div>
        <div>
          <input required v-model="email" type="text" placeholder="Укажите email" name="" id="" />
        </div>
        <div>
          <input required v-model="password" type="password" placeholder="Придумайте пароль" name="" id="" />
        </div>
        <div>
          <select v-model="occupation" class="children:text-xl mb-30px" name="" id="">
            <option value="-1" selected disabled hidden>Укажите роль</option>
            <option value="SECRETARY">Секретарь</option>
          </select>
        </div>

        <div>
          <button :disabled="load" @click="createUser"
            class="btn-text h-40px disabled:opacity-50 text-xl w-1/3 rounded-[11px] mt-10px w-full bg-base-7 cursor-pointer">
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
        v-for="user in users" :key="user._id">
        <div class="">
          <img src="@/assets/member.png" alt="" class="w-100px" />

          <p class="text-2xl">{{ user.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const load = ref(false)
const fullName = ref('')
const idUser = ref('')
const email = ref('')
const password = ref('')
const occupation = ref('')
const users = ref([])

const getUsers = async () => {
  const res = await fetch(`http://80.90.186.17:5100/api/getUsers`)
  const data = await res.json()
  users.value = data.users
}

const createUser = async () => {
  try {
    if (!password.value || !email.value || !fullName.value || !occupation.value) return alert("Заполните все поля!")
    if (password.value.length < 6) return alert("Минимальная длина пароля 6")

    load.value = true

    const res = await fetch(`http://80.90.186.17:5100/api/auth/registration`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fullName.value,
        username: idUser.value,
        password: password.value,
        role: occupation.value,
        login: email.value
      }),
    })

    if (res.status == 409) {
      alert("Такой ник уже существует. Придумайте другой")
      load.value = false
      return
    }

    if (res.status == 410) {
      alert("Такой email уже существует. Введите другой")
      load.value = false
      return
    }

    const data = await res.json()
    if (res.status != 200) return alert(data.message)

    await getUsers()
    console.log(data)
    alert("Пользователь успешно добавлен")
    load.value = false
  } catch (error) {
    load.value = false
  }
}

onMounted(async () => {
  await getUsers()
})
</script>

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
