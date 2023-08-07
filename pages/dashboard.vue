<template>
  <div class="w-full h-screen p-30px">
    <div>
      <h1 class="text-3xl font-extrabold mb-15px">Статистика</h1>
      <div class="flex">
        <div class="w-1/3 h-200px one bg-purple mr-15px rounded-xl flex">
          <div class="icon-color m-20px flex items-center justify-center">
            <i class="text-6xl bx bxs-user mr-10px"></i>
            <div class="flex flex-col">
              <h4 class="text-5xl font-thin">20</h4>
              <span class="text-12px font-thin">число секретарей</span>
            </div>
          </div>
        </div>
        <div class="w-1/3 h-200px two bg-base-0 mr-15px rounded-xl flex">
          <div class="icon-color m-20px flex items-center justify-center">
            <i class="text-6xl bx bx-user-pin mr-10px"></i>
            <div class="flex flex-col">
              <h4 class="text-5xl font-thin">10</h4>
              <span class="text-12px font-thin">число менеджеров</span>
            </div>
          </div>
        </div>
        <div class="w-1/3 h-200px three bg-base-0 mr-15px rounded-xl flex">
          <div class="icon-color m-20px flex items-center justify-center">
            <i class="text-6xl bx bx-conversation mr-10px"></i>
            <div class="flex flex-col">
              <h4 class="text-5xl font-thin">135</h4>
              <span class="text-12px font-thin">число прошедших совещаний</span>
            </div>
          </div>
        </div>
        <div class="w-1/3 h-200px four bg-base-0 mr-0px rounded-xl flex">
          <div class="icon-color m-20px flex items-center justify-center">
            <i class="text-6xl bx bxs-notepad mr-10px"></i>
            <div class="flex flex-col">
              <h4 class="text-5xl font-thin">131</h4>
              <span class="text-12px font-thin">число готовый протоколов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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