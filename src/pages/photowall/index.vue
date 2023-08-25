<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';
import { getParties } from '../../composables/pictures';

const { t } = useI18n();
const parties = ref([]);

onMounted(async () => {
  console.log('mounted');
  parties.value = await getParties();
  console.log(JSON.stringify(parties.value));
//   const pictures = await getPictures(1);
//   console.log(pictures);
});

</script>
<template>
     <div class="pt-28 mx-4 md:mx-8 flex flex-col z-10">
        <h1 class="gndH1">{{ t('photowall.title')}}</h1>
        <h2 class="text-3xl">{{ t('photowall.subtitle')}}</h2>
        <p class="text-lg">{{ t('photowall.text')}}</p>
        <div class="flex flex-col md:flex-row">
            <div v-for="party in parties" :key="party.id">
                <router-link class="cursor-pointer " :to="`/photowall/${party.id}`">
                    <div class="m-2">
                        <img class="h-20 mx-auto" src="/public/gfx/folder.png" alt="Folder">
                        <p class="text-lg text-primary  text-center">{{ party.attributes.Title }} ({{ party.attributes.Creator }})</p>
                    </div>
                </router-link>
            </div>
        </div>
     </div>
</template>
