<template>
  <div class="w-full h-screen p-30px">
    <div>
      <div class="flex gap-10px justify-between mb-15px">
        <h1 class="text-3xl font-extrabold">Протоколы</h1>
        <div class="flex gap-10px children:cursor-pointer">
          <div
            class="h-35px rounded-[5px] text-20px hover:opacity-50 transition-all text-rarly-0 w-65px flex justify-center items-center bg-rarly-0/20">
            <Icon name="ion:ellipsis-horizontal" />
          </div>
          <div
            class="h-35px text-sm rounded-[5px] hover:opacity-50 transition-all w-65px flex justify-center items-center text-base-4 bg-rarly-1">
            Add
          </div>
        </div>
      </div>
      <div class="">
        <div class="grid text-base-5 grid-cols-[2fr,1fr,1fr,1fr,1fr] p-16px">
          <div class="">Owner</div>
          <div class="">End date</div>
          <div class="">Profits</div>
          <div class="">Losses</div>
          <div class="">Phone</div>
        </div>
        <div
          class="grid text-sm cursor-pointer hover:opacity-50 transition-all font-medium p-16px grid-cols-[2fr,1fr,1fr,1fr,1fr]"
          :class="{ 'bg-base-4/40': i % 2 == 0 }" v-for="(protocol, i) in protocols" :key="protocol.phone">
          <div class="">{{ protocol.owner }}</div>
          <div class="">{{ protocol.endDate }}</div>
          <div class="">{{ protocol.profits }}</div>
          <div class="">{{ protocol.losses }}</div>
          <div class="">{{ protocol.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const protocols = [
  { owner: 'Savannah Nguyen', endDate: '1/15/12', profits: '$328.85', losses: '$779.58', phone: '(603) 555-0123' },
  { owner: 'Cameron Williamson', endDate: '7/27/13', profits: '$782.01', losses: '$710.68', phone: '(303) 555-0105' },
  { owner: 'Jenny Wilson', endDate: '8/30/14', profits: '$948.55', losses: '$589.99', phone: '(629) 555-0129' },
  { owner: 'Annette Black', endDate: '5/30/14', profits: '$778.35', losses: '$948.55', phone: '(308) 555-0121' },
  { owner: 'Kathryn Murphy', endDate: '11/7/16', profits: '$169.43', losses: '$202.87', phone: '(302) 555-0107' },
]
</script>

<style scoped>
i {
  margin-right: 30px;
}

.icon-color {
  color: white;
}

.one {
  background-image: linear-gradient(to top,
      #1c3ddd,
      #9c00b9,
      #cc008e,
      #e10062,
      #e21c3a);
}

.two {
  background-image: linear-gradient(to top,
      #039115,
      #19a12d,
      #28b241,
      #35c354,
      #41d468);
}

.three {
  background-image: linear-gradient(to top,
      #dd3c28,
      #df3c2d,
      #e13c32,
      #e23c37,
      #e43c3c);
}

.four {
  background-image: linear-gradient(to top,
      #72eb56,
      #73e950,
      #75e84a,
      #76e643,
      #78e43c);
}
</style>