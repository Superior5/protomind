<template>
  <div class="flex w-full">
    <div class="w-1/2 h-screen p-30px">
      <h1 class="text-3xl font-extrabold mb-25px">
        Дашборд секретаря: Дасаев Мохаммед-Али Магомедович
      </h1>

      <Calendar
        :dates="[
          new Date(2023, 7, 2),
          new Date(2023, 7, 7),
          new Date(2023, 7, 17),
          new Date(2023, 7, 23),
        ]"
      />/>
      <div>
        <h1 class="text-3xl font-extrabold mb-15px">
          Статистика за последний месяц
        </h1>
        <div class="flex wrap">
          <div class="w-1/3 h-200px one bg-purple mr-15px rounded-xl flex">
            <div class="icon-color m-20px flex items-center justify-center">
              <i class="text-6xl bx bxs-user mr-10px"></i>
              <div class="flex flex-col">
                <h4 class="text-5xl font-thin">45</h4>
                <span class="text-20px font-thin">задач выполненно </span>
              </div>
            </div>
          </div>
          <div class="w-1/3 h-200px two bg-base-0 mr-15px rounded-xl flex">
            <div class="icon-color m-20px flex items-center justify-center">
              <i class="text-6xl bx bx-user-pin mr-10px"></i>
              <div class="flex flex-col">
                <h4 class="text-5xl font-thin">48</h4>
                <span class="text-20px font-thin">протоколов занесено</span>
              </div>
            </div>
          </div>
          <div class="w-1/3 h-200px three bg-base-0 rounded-xl flex">
            <div class="icon-color m-20px flex items-center justify-center">
              <i class="text-6xl bx bx-conversation mr-10px"></i>
              <div class="flex flex-col">
                <h4 class="text-5xl font-thin">51</h4>
                <span class="text-20px font-thin">совещаний проведено</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 pt-30px flex flex-col">
      <SearchBar />
      <TaskList class="w-full h-3/5 overflow-y-scroll" />
    </div>
  </div>
</template>

<script setup>
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