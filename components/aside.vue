<template>
  <div class="wrapp p-26px h-screen">
    <div :class="{ show: show }" class="h-full rounded-24px" id="aside">
      <div class="p-14px">
        <div class="title">
          <h2 :class="{ 'block': !show, 'hidden': show }">PROTOMIND</h2>
          <h2 :class="{ 'block': show, 'hidden': !show }" class="mr-10px">P</h2>
          <Icon class="cursor-pointer text-xl" @click="show = !show" name="ph:list-bold" />
        </div>
        <ul class="flex flex-col gap-5px">
          <li v-for="(el, i) in menu" :key="i">
            <nuxt-link :to="el[1]"
              class="h-50px px-10px flex gap-15px items-center hover:(bg-base-1/80 text-base-2) rounded-[10px] transition-all">
              <Icon class="text-xl" style="transform: scale(1.5);" :name="el[0]" />
              <span>{{ i }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="account rounded-b-24px">
        <Icon class="text-40px" name="ic:baseline-account-box" />
        <Icon v-if="state.tokenAuth" class="text-40px absolute right-0" name="bxs:exit" />

        <div class="font-medium" v-if="state.tokenAuth">
          <div class="text-14px">{{ state.userInfo.name }}}</div>
          <div class="text-12px">{{ roles[state.userInfo.role] }}</div>
        </div>
        <div class="" v-else>
          Авторизуйтесь
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const state = useDataStore();
const show = ref(false);
const menu = {
  Дашборд: ["ic:round-grid-view", "/dashboard"],
  Протоколы: ["material-symbols:docs", "/protocols"],
  Настройки: ["material-symbols:settings", "/construction"],
};
const roles = {
  'SECRETARY': 'Секретарь'
}
</script>

<style scoped>
#aside {
  @apply bg-base-7 text-base-1 w-full max-w-250px flex flex-col transition-all justify-between;
}

#aside.show {
  @apply w-135px;
}

#aside .title {
  @apply flex justify-between items-center text-20px font-bold mb-50px mt-15px;
}

#aside.show .title {
  @apply justify-center;
}

#aside .router-link-active.router-link-exact-active {
  @apply bg-base-1 text-base-2;
}

#aside .account {
  @apply bg-base-7 p-14px gap-10px flex relative items-center h-68px;
}

#aside .account .absolute {
  @apply opacity-0 transition-all p-5px bg-rarly-3 cursor-pointer;
}

#aside .account:hover .absolute {
  @apply opacity-100 text-[#ff0000];
}


#aside.show ul li a span,
#aside.show .account *:not(.absolute) {
  @apply hidden;
}

#aside.show ul li a {
  @apply justify-center;
}

#aside.show .account .absolute {
  @apply opacity-100 text-[#ff0000] right-[unset];
}

#aside.show .account {
  @apply justify-center items-center;
}
</style>