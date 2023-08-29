<template>
  <div class="w-full">
    <div class="pt-30px">
      <div class="grid text-base-5 grid-cols-[2fr,1fr,1fr,1fr,1fr] p-16px">
        <div class="">Задача</div>
        <div class="">Ответственный</div>
        <div class="">Дедлайн</div>
        <div class="">Статус</div>
        <div class="">Номер протокола</div>
      </div>
      <div
        class="grid text-sm cursor-pointer hover:opacity-50 transition-all font-medium p-16px grid-cols-[2fr,1fr,1fr,1fr,1fr]"
        :class="{ 'bg-base-4/40': i % 2 == 0 }"
        v-for="(protocol, i) in protocols"
        :key="protocol.phone"
      >
        <div class="">{{ protocol.task }}</div>
        <div class="">{{ protocol.responsible }}</div>
        <div class="">{{ protocol.deadline }}</div>
        <div class=""> <StatusLabel :status="protocol.status" /> </div>
        <div class="">{{ protocol.number }}</div>
      </div>
    </div>
  </div>
</template>


<script setup>
const protocols = [
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 2,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 2,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
  {
    task: "Занести протокол",
    responsible: "Иванова Ольга",
    deadline: "18.08.23",
    status: 1,
    number: "555-0123",
  },
];
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