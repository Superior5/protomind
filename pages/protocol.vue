<template>
  <div class="w-full h-screen p-30px relative">
    <div>
      <div class="flex gap-10px justify-between mb-15px">
        <h1 class="text-3xl font-extrabold">Протоколы</h1>
        <div class="flex gap-10px children:cursor-pointer">
          <div
            class="h-35px rounded-[5px] text-20px hover:opacity-50 transition-all text-rarly-0 w-65px flex justify-center items-center bg-rarly-0/20"
          >
            <Icon name="ion:ellipsis-horizontal" />
          </div>
          <div
            @click="isOpen = true"
            class="h-35px text-sm rounded-[5px] hover:opacity-50 transition-all w-65px flex justify-center items-center text-base-4 bg-rarly-1"
          >Добавить
          </div>
        </div>
      </div>
      <div class="">
        <div class="grid text-base-5 grid-cols-[2fr,1fr,1fr,1fr,1fr] p-16px">
          <div class="">Тема</div>
          <div class="">Секретарь</div>
          <div class="">Дата</div>
          <div class="">Номер протокола</div>
          <div class="">Статус</div>
        </div>
        <div
          class="grid text-sm cursor-pointer hover:opacity-50 transition-all font-medium p-16px grid-cols-[2fr,1fr,1fr,1fr,1fr]"
          :class="{ 'bg-base-4/40': i % 2 == 0 }"
          v-for="(protocol, i) in protocols"
          :key="protocol.phone"
        >
          <div class="">{{ protocol.theme }}</div>
          <div class="">{{ protocol.secretary }}</div>
          <div class="">{{ protocol.date }}</div>
          <div class="">{{ protocol.number }}</div>
          <div class=""><StatusLabel :status="protocol.status" /></div>
        </div>
      </div>
    </div>

    <div
      @click="isOpen = false"
      class="modal absolute top-0 left-0 bg-base-2 bg-opacity-10 w-full h-full"
      v-if="isOpen"
    >
      <div @click.stop class="m-20px p-20px bg-base-1" >
        <NewProtocol />
     </div>
    </div>
  </div>
</template>

<script setup>
const protocols = [
  {
    theme: "Глобальное потепление",
    secretary: "Иванова Ольга",
    date: "15.08.23",
    number: "555-0123",
    status: 1,
  },

  {
    theme: "Глобальное потепление",
    secretary: "Иванова Ольга",
    date: "15.08.23",
    number: "555-0123",
    status: 1,
  },
  {
    theme: "Глобальное потепление",
    secretary: "Иванова Ольга",
    date: "15.08.23",
    number: "555-0123",
    status: 2,
  },
  {
    theme: "Глобальное потепление",
    secretary: "Иванова Ольга",
    date: "15.08.23",
    number: "555-0123",
    status: 1,
  },
  {
    theme: "Глобальное потепление",
    secretary: "Иванова Ольга",
    date: "15.08.23",
    number: "555-0123",
    status: 2,
  },
];

const isOpen = ref(false);
</script>

<style scoped>
i {
  margin-right: 30px;
}

.icon-color {
  color: white;
}

.one {
  background-image: linear-gradient(
    to top,
    #1c3ddd,
    #9c00b9,
    #cc008e,
    #e10062,
    #e21c3a
  );
}

.two {
  background-image: linear-gradient(
    to top,
    #039115,
    #19a12d,
    #28b241,
    #35c354,
    #41d468
  );
}

.three {
  background-image: linear-gradient(
    to top,
    #dd3c28,
    #df3c2d,
    #e13c32,
    #e23c37,
    #e43c3c
  );
}

.four {
  background-image: linear-gradient(
    to top,
    #72eb56,
    #73e950,
    #75e84a,
    #76e643,
    #78e43c
  );
}
</style>