<template>
   <div id="protocol" class="w-full px-30px py-10px max-h-screen overflow-auto">
      <div class="bg-1 relative flex justify-center">
         <h1 class="text-base-7 font-bold text-24px">Протокол 1</h1>
         <div class="absolute flex gap-15px right-60px">
            <button class="btn-1 opacity-50 cursor-not-allowed" disabled>PDF</button>
            <button @click="generateDocx" class="btn-1">DOCX</button>
         </div>
      </div>
      <div class="flex gap-20px mt-20px">
         <div class="bg-1 w-full py-30px">
            <div class="flex flex-col gap-20px">
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Тема</label>
                  <input :value="protocol.topic" disabled type="text" name="" id="subject"
                     class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Повестка</label>
                  <input :value="protocol.subject" disabled type="text" name="" id="subject"
                     class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Секретарь</label>
                  <input :value="protocol.secretary.name" disabled type="text" name="" id="subject"
                     class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
               <div class="w-full text-center">
                  <label for="subject" class="text-base-7 font-bold text-20px">Руководитель</label>
                  <input :value="protocol.director" disabled type="text" name="" id="subject"
                     class="w-full mt-5px bg-rarly-5 rounded-[10px] py-10px px-20px">
               </div>
            </div>
            <button class="btn-1 text-24px px-20px py-10px mx-auto block mt-30px">Текст протокола</button>
         </div>
         <div class="bg-1 w-full px-20px">
            <div class="">
               <h5 class="text-base-7 font-bold text-20px text-center py-20px">Участники</h5>
               <div class="grid grid-cols-4 gap-20px">
                  <div class="text-center bg-rarly-5 rounded-[10px] p-5px text-base-7 text-sm">
                     <img src="@/assets/member.png" alt="" class="mb-5px w-full">
                     {{ protocol.secretary.name }}
                  </div>
                  <div class="text-center bg-rarly-5 rounded-[10px] p-5px text-base-7 text-sm">
                     <img src="@/assets/member.png" alt="" class="mb-5px w-full">
                     {{ protocol.director }}
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
         <div class="text-lg flex flex-wrap text-justify gap-2px">
            <template v-if="protocol.transcribe">
               <span class="cursor-pointer px-3px hover:(text-base-6 underline)" @click="setTime(word.start)"
                  v-for="word in protocol.transcribe" :key="word.word + word.start"
                  :class="{ 'bg-base-3/50': word.start <= currentTimeVideo }">
                  {{ word.word }}
               </span>
            </template>
            <template v-else>
               {{ protocol.transcribe }}
            </template>
         </div>
         <button class="btn-1 text-24px px-20px py-10px mx-auto block mt-30px">Исполнить протокол</button>
      </div>
   </div>
</template>
<script setup>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from "docx";

const generateDocx = () => {
   const doc = new Document({
      sections: [
         {
            properties: {},
            children: [
               new Paragraph({
                  children: [
                     new TextRun({
                        text: protocol.value.topic,
                        bold: true,
                        size: '30pt',
                        allCaps: true
                     })
                  ],
               }),
               new Paragraph({
                  children: [
                     new TextRun(protocol.value.transcribe.reduce((acc, el) => acc += el.word + ' ', ''))
                  ],
               }),
            ],
         },
      ],
   });
   const mimeType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
   const fileName = protocol.value.topic + "_protocol.docx";
   Packer.toBlob(doc).then((blob) => {
      const docblob = blob.slice(0, blob.size, mimeType);
      saveAs.saveAs(docblob, fileName);
   });
}

const route = useRoute()
const protocol = ref({
   "_id": "",
   "topic": "",
   "subject": "",
   "secretary": "",
   "director": "",
   "date": "",
   "video": "",
   "audio": "",
   "transcribe": "",
   "__v": null
})

const videoPlayer = ref(null);
let player = null;
const currentTimeVideo = ref(0)
const videoOptions = ref({
   controls: true,
   height: 315,
   sources: [
      {
         src:
            'http://80.90.186.17:5100/' + protocol.value.video,
         type: 'video/mp4'
      }
   ]
})

const setTime = (seconds) => {
   if (player) {
      player.currentTime(seconds);
   }
};

onMounted(async () => {
   try {
      const res = await fetch(`http://80.90.186.17:5100/api/getProtocol/${route.params.id}`)
      protocol.value = (await res.json()).protocol
      protocol.value.secretary = JSON.parse(protocol.value.secretary)
      protocol.value.transcribe = JSON.parse(protocol.value.transcribe)

      if (protocol.value.transcribe) {
         if (Array.isArray(protocol.value.transcribe)) {
            protocol.value.transcribe = protocol.value.transcribe.reduce((acc, el) => {
               if (el.text) el.result.forEach(el2 => acc.push({ word: el2.word, start: el2.start }))
               return acc
            }, []);

         } else if (protocol.value.transcribe.result) {
            protocol.value.transcribe = protocol.value.transcribe.result
         }
      }

      videoOptions.value.sources[0].src = 'http://80.90.186.17:5100/' + protocol.value.video

      player = videojs(videoPlayer.value, videoOptions.value, () => {
         player.log('onPlayerReady', this);
      });

      player.on('timeupdate', () => {
         currentTimeVideo.value = player.currentTime()
      })

   } catch (error) {
      console.log(error);
   }
});

onBeforeUnmount(() => {
   if (player) {
      player.dispose();
   }
});

</script>
<style>
#protocol .video-js {
   width: 100%;
}
</style>