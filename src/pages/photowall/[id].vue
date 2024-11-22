<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPictures } from '../../composables/pictures'

const { t } = useI18n()

const route = useRoute()
const partyId = route.params.id
const pics = ref([])
const photosCount = ref(0)
const start = ref(0)
const currentPagePics = ref(null) // Store pictures for the current page
const limit = 10
const fetchLimit = 10000

async function fetchPictures() {
    pics.value = await getPictures(partyId, start.value, fetchLimit)
    pics.value.Photos.forEach((pic) => {
        pic.formats = pic.formats ?? {}
        pic.formats.small = pic.formats.small ?? {}
        pic.formats.small.url = pic.formats.small.url ?? pic.url
    })
    photosCount.value = pics.value.PhotosCount
}
function nextPage() {
    if (start.value + limit < photosCount.value) {
        start.value += limit
        updateCurrentPagePics()
    }
}

function updateCurrentPagePics() {
    // const start = (currentPage.value - 1) * limit
    const end = start.value + limit
    currentPagePics.value = pics.value.Photos.slice(start.value, end)
}

function prevPage() {
    if (start.value - limit >= 0) {
        start.value -= limit
        updateCurrentPagePics()
    }
}

function getRandomRotation() {
    return Math.floor(Math.random() * 31) - 15 // generates a random integer between -15 and 15
}

onMounted(async () => {
    if (Number.isNaN(start.value)) {
        start.value = 0 // reset to 0 if it's NaN
    }
    await fetchPictures()
    updateCurrentPagePics()
})
</script>

<template>
    <div
        v-if="!currentPagePics"
        class="pt-28 mx-4 md:mx-8 flex flex-col z-10 mx-auto"
    >
        loading...
        <span class="loading loading-spinner loading-lg" />
    </div>
    <div
        v-if="currentPagePics"
        :key="currentPagePics"
        class="pt-28 mx-4 md:mx-8 flex flex-col z-10"
    >
        <h1 class="gndH1">
            {{ t('photowall.title') }}
        </h1>

        <p class="text-lg">{{ t('photowall.takenBy') }} {{ pics.Creator }}</p>

        <div class="flex flex-wrap justify-center md:w-2/3 mx-auto my-4">
            <div
                v-for="pic in currentPagePics"
                :key="pic.url"
                class="w-1/2 md:w-1/4 p-2"
            >
                <a
                    :href="`https://strapi.puppy.nrw${pic.url}`"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        :style="{
                            transform: `rotate(${getRandomRotation()}deg)`,
                        }"
                        class="mx-auto w-full h-auto rounded"
                        :src="`https://strapi.puppy.nrw${pic.formats.small.url ? pic.formats.small.url : pic.url}`"
                        alt="Folder"
                    />
                </a>
            </div>
        </div>

        <div class="flex justify-center items-center my-4">
            <button
                class="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                @click="prevPage"
            >
                {{ t('photowall.prev') }}
            </button>
            <span class="mx-4 text-white"
                >{{ start / limit + 1 }}/{{
                    Math.ceil(photosCount / limit)
                }}</span
            >
            <button
                class="px-4 py-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                @click="nextPage"
            >
                {{ t('photowall.next') }}
            </button>
        </div>
    </div>
</template>
