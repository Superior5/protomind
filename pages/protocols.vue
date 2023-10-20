<template>
  <div class="w-full relative">
    <div class="w-full flex justify-center mb-15px">
      <header class="w-[80%] h-51px bg-base-8 rounded-[11px] mt-26px">
        <div class="flex justify-between">
          <div class="ml-100px flex items-center">
            <h2 class="">Протоколы</h2>
          </div>
          <div class="flex">
            <h2 class="mr-100px flex items-center">Создать новый протокол</h2>
            <div class="flex items-center mt-7px mr-7px mb-7px">
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
        <div
          class="list-element w-full mb-14px bg-base-8 rounded-[11px] h-82px flex justify-evenly"
          :class="{
            'text-base-7': protocol.status == 1,
            'text-rarly-1': protocol.status == 2,
          }"
          v-for="protocol in protocols"
          :key="protocol.date"
        >
          <div class="theme w-2/7">{{ protocol.theme }}</div>
          <div class="secretary">{{ protocol.secretary }}</div>
          <div class="date">{{ protocol.date }}</div>
          <div class="number">{{ protocol.number }}</div>
          <div class="status"><status-label :status="protocol.status" /></div>
        </div>
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