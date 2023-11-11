<template>
   <div class="py-26px w-full flex">
      <div class="w-full px-80px">
         <div class="">
        <Calendar/>

         </div>
      </div>
      <div class="rounded-[20px] w-full max-w-450px border border-rarly-6 shadow-0 px-30px py-20px flex flex-col">
         <h2 class="text-20px text-center text-base-7 font-bold">Тема совещания</h2>
         <input placeholder="Введите тему совещания" type="text"
            class="rounded-[10px] border border-base-7 my-20px px-20px py-5px">
         <input placeholder="Вставьте ссылку на совещание" type="text"
            class="rounded-[10px] border border-base-7 px-20px py-5px">
         <div class="flex my-20px">
            <div v-for="i in 3" :key="i" :class="{ 'bg-0': i == 1 }"
               class="w-[35%] py-10px text-20px border rounded-[5px] text-center text-base-7 font-bold">
               15 м
            </div>
         </div>
         <div class="flex items-center mb-20px">
            <div class="flex w-full gap-10px items-center flex-col text-20px text-base-7 font-bold">
               <span>Начало</span>
               <VDatePicker v-model="dateStart" mode="time" />
            </div>
            <img src="@/assets/arrow.svg" alt="">
            <div class="flex w-full gap-10px flex-col items-center justify-between text-20px text-base-7 font-bold">
               <span>Конец</span>
               <VDatePicker class="w-full" v-model="dateFinish" mode="time" />
            </div>
         </div>
         <div class="">
            <h5 class="text-20px mb-20px text-center text-base-7 font-bold">Участники</h5>
            <div class="border rounded-[10px] p-10px">
               <input v-model="searchMember" placeholder="Найти участника" type="text" name="" id=""
                  class="w-full my-10px border rounded-[5px] p-5px">
               <div class="flex flex-col gap-10px max-h-250px overflow-y-auto overflow-x-hidden">
                  <div v-for="member in filterMembers" :key="member.email"
                     class="flex gap-10px justify-between items-center">
                     <div class="flex items-center gap-8px w-3/5 w">
                        <img class="w-34px rounded-[50%]" :src="member.avatar" alt="">
                        {{ member.name }}
                     </div>
                     <div class="w-2/5 flex justify-between gap-8px">
                        {{ member.email }}
                        <input type="checkbox" :checked="member.check" @input="member.check = !member.check" name="" id="">
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="flex font-bold text-12px items-center gap-10px my-20px">
            <img src="@/assets/file.svg" alt="">
            Passport.mp4
         </div>
         <div class="flex justify-between">
            <button class="text-24px rounded-[8px] bg-base-7 py-8px px-13px text-base-1 font-bold">+ Документ</button>
            <button class="text-24px rounded-[8px] bg-base-7 py-8px px-13px text-base-1 font-bold">Сохранить</button>
         </div>
      </div>
   </div>
</template>
<script setup>
const searchMember = ref('')
const dateFinish = ref(new Date());
const dateStart = ref(new Date());

const members = ref([
   { name: 'Сулейманова Милана', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg', email: '@jeni56', check: false },
   { name: 'Довдаев Жовхар', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/33.jpg', email: '@2jeni56', check: false },
   { name: 'Гатаева Аминат Арбиевна', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/32.jpg', email: '@fjeni56', check: false },
   { name: 'Батаев Ильяс', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/31.jpg', email: '@jenveri56', check: false },
   { name: 'Магомадов Арби', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/30.jpg', email: '@jfwe2eni56', check: false },
   { name: 'Сулейманова Милана', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg', email: '@jenfei56', check: false },
   { name: 'Довдаев Жовхар', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/33.jpg', email: '@2jenif2e256', check: false },
   { name: 'Гатаева Аминат Арбиевна', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/32.jpg', email: '@fjwedeni56', check: false },
   { name: 'Батаев Ильяс', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/31.jpg', email: '@jenf24everi56', check: false },
   { name: 'Магомадов Арби', avatar: 'https://xsgames.co/randomusers/assets/avatars/male/30.jpg', email: '@jfwfsw3e2eni56', check: false },
])

const filterMembers = computed(() => members.value.filter(el => el.email.includes(searchMember.value)))
</script>
<style>
   ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    border-radius: 8px;
}

::-webkit-scrollbar-track {
    background: #d4d4d4;
}

::-webkit-scrollbar-thumb {
    background: #939393;
    border-radius: 8px;
}

</style>