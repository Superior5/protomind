<template>
   <div id="protocol" class="w-full px-30px py-10px max-h-screen overflow-auto">
      <div class="bg-1 relative flex justify-center">
         <h1 class="text-base-7 font-bold text-24px">Протокол 1</h1>
         <div class="absolute flex gap-15px right-60px">
            <button class="btn-1">PDF</button>
            <button class="btn-1">DOCX</button>
         </div>
      </div>
      <div class="flex gap-20px mt-20px">
         <div class="bg-1 w-full py-30px">
            <div class="flex flex-col gap-20px">
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Тема</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Повестка</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Секретарь</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Руководитель</label>
                  <input type="text" name="" id="subject" class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
            </div>
            <button class="btn-1 text-24px px-20px py-10px mx-auto block mt-30px">Текст протокола</button>
         </div>
         <div class="bg-1 w-full px-20px">
            <div class="">
               <h5 class="text-base-7 font-bold text-20px text-center py-20px">Участники</h5>
               <div class="flex justify-between">
                  <div class="text-center bg-rarly-5 rounded-[10px] p-5px text-base-7 text-sm">
                     <img src="@/assets/member.png" alt="" class="mb-5px w-full">
                     Иванов Иван Иванович
                  </div>
                  <div class="text-center bg-rarly-5 rounded-[10px] p-5px text-base-7 text-sm">
                     <img src="@/assets/member.png" alt="" class="mb-5px w-full">
                     Иванов Иван Иванович
                  </div>
                  <div class="text-center bg-rarly-5 rounded-[10px] p-5px text-base-7 text-sm">
                     <img src="@/assets/member.png" alt="" class="mb-5px w-full">
                     Иванов Иван Иванович
                  </div>
                  <div class="text-center bg-rarly-5 rounded-[10px] p-5px text-base-7 text-sm">
                     <img src="@/assets/member.png" alt="" class="mb-5px w-full">
                     Иванов Иван Иванович
                  </div>
               </div>
            </div>
            <div class="mt-40px">
               <h5 class="text-base-7 font-bold text-20px text-center py-20px">Видеозапись</h5>
               <video ref="videoPlayer" class="video-js"></video>
            </div>
         </div>
      </div>
      <div class="bg-1 mt-20px p-20px">
         <h2 class="text-base-7 font-bold text-20px mb-30px text-center">Стенограмма С временем</h2>
         <div class="text-lg text-justify">
            Практический опыт показывает, что дальнейшее развитие различных форм деятельности в значительной степени
            обуславливает создание ключевых компонентов планируемого обновления. Равным образом дальнейшее развитие
            различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного
            развития. Задача организации, в особенности же рамки и место обучения кадров требует от нас анализа
            соответствующих условий активизации! Значимость этих проблем настолько очевидна, что рамки и место обучения
            кадров способствует подготовке и реализации соответствующих условий активизации. Значимость этих проблем
            настолько очевидна, что реализация намеченного плана развития играет важную роль в формировании форм
            воздействия.<br><br>
            Разнообразный и богатый опыт реализация намеченного плана развития способствует повышению актуальности форм
            воздействия! Значимость этих проблем настолько очевидна, что сложившаяся структура организации играет важную
            роль в формировании системы масштабного изменения ряда параметров? Дорогие друзья, курс на
            социально-ориентированный национальный проект требует определения и уточнения существующих финансовых и
            административных условий! Задача организации, в особенности же постоянное информационно-техническое обеспечение
            нашей деятельности играет важную роль в формировании дальнейших направлений развитая системы массового участия.
            Не следует, однако, забывать о том, что выбранный нами инновационный путь обеспечивает актуальность
            соответствующих условий активизации. Повседневная практика показывает, что новая модель организационной
            деятельности играет важную роль в формировании соответствующих условий активизации! <br><br>
            Дорогие друзья, курс на социально-ориентированный национальный проект требует определения и уточнения
            существующих финансовых и административных условий! Задача организации, в особенности же постоянное
            информационно-техническое обеспечение нашей деятельности играет важную роль в формировании дальнейших
            направлений развитая системы массового участия.
         </div>
      </div>
   </div>
</template>
<script setup>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
const route = useRoute()
const protocol = ref(null)

onMounted(async () => {
   try {
      const res = await fetch(`http://80.90.186.17:5100/api/getProtocol/${route.params.id}`)
      protocol.value = (await res.json()).protocol
   } catch (error) {

   }
})

const videoPlayer = ref(null);
let player = null;
const videoOptions = ref({
   controls: true,
   height: 315,
   sources: [
      {
         src:
            'http://80.90.186.17:5100/uploads/videos/2023-11-06T14-09-43.338Z-Ren - Money Game Part 2 (Official Lyric Video) (1).mp4',
         type: 'video/mp4'
      }
   ]
})

const setTime = (seconds) => {
   if (player) {
      player.currentTime(seconds);
   }
};

onMounted(() => {
   player = videojs(videoPlayer.value, videoOptions.value, () => {
      player.log('onPlayerReady', this);
   });
});

onBeforeUnmount(() => {
   if (player) {
      player.dispose();
   }
});
</script>
<style lang="">
   
</style>