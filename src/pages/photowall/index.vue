<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import { getParties } from '../../composables/pictures'

const { t } = useI18n()
const parties = ref([])

onMounted(async () => {
    console.log('mounted')
    parties.value = await getParties()
    parties.value.sort((a, b) => {
        if (new Date(a.attributes.Date) < new Date(b.attributes.Date)) {
            return 1
        }
        if (new Date(a.attributes.Date) > new Date(b.attributes.Date)) {
            return -1
        }
        return 0
    })
    console.log(JSON.stringify(parties.value))
    //   const pictures = await getPictures(1);
    //   console.log(pictures);
})
</script>
<template>
    <div class="pt-28 mx-4 md:mx-8 flex flex-col z-10">
        <h1 class="gndH1">
            {{ t('photowall.title') }}
        </h1>
        <h2 class="text-3xl">
            {{ t('photowall.subtitle') }}
        </h2>
        <p class="text-lg">
            {{ t('photowall.text') }}
        </p>
        <div class="flex flex-col md:flex-row flex-wrap">
            <div v-if="!parties.length">
                loading...
                <span class="loading loading-spinner loading-lg" />
            </div>
            <div
                v-for="party in parties"
                :key="party.id"
                class="w-full md:w-1/4 p-2"
            >
                <router-link
                    class="cursor-pointer"
                    :to="`/photowall/${party.documentId}`"
                >
                    <div class="m-2">
                        <img
                            class="h-20 mx-auto"
                            src="/public/gfx/folder.png"
                            alt="Folder"
                        />
                        <p class="text-lg text-primary text-center">
                            {{ party.Title }} ({{ party.Creator }})
                        </p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
