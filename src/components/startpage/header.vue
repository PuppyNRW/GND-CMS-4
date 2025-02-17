<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'
import TelegramButton from '../TelegramButton.vue'
import InstagramButton from '../InstagramButton.vue'
import DetailsButton from '../DetailsButton.vue'
import FaqButton from '../FaqButton.vue'
import { getNextFutureDate, generateICS } from '../../composables/dates'

const { t, d } = useI18n()

// const nextEvent = new Date('2023-10-07T21:00:00');
const nextEvent = ref()
onMounted(() => {
    // const date = getNextFutureDate()
    // console.log(date)
    // nextEvent.value = new Date(`${date.date}T${date.time}`)
})

const downloadICS = () => {
    const icsContent = generateICS(getNextFutureDate())
    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'gearndance.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
</script>
<template>
    <div
        class="min-h-full bg-[url('/images/mainbackground1.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <h1 class="text-5xl text-center text-primary font-semibold mb-3 pt-28">
            {{ t('index.header.title') }}
        </h1>
        <div
            v-if="false"
            class="flex flex-row items-center my-12 animate-bounce"
        >
            <a
                href="https://upload.puppy.nrw/"
                target="_blank"
                class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded-sm hover:bg-gray-400"
                >{{ t('index.header.upload') }}</a
            >
        </div>
        <div class="bg-black/50">
            <div class="p-3 flex flex-col items-center md:mt-32">
                <p class="text-white text-justify text-xl">
                    {{ $t('index.header.subtitle') }}
                </p>
                <div
                    class="bg-white md:w-1/2 text-center text-black flex flex-col rounded-sm relative"
                >
                    <p>{{ $t('index.header.nextEvent') }}</p>
                    <h2 v-if="nextEvent" class="font-bold text-3xl">
                        {{ d(nextEvent) }}
                    </h2>
                    <h2 class="font-bold text-3xl">ab 21:00 Uhr</h2>
                    <p class="mb-2">
                        {{ $t('index.header.welcome') }}
                    </p>
                    <span>
                        <i class="bi bi-geo-alt-fill" />
                        <a href="#direction" class="text-black"
                            >In der Eloria Bar und Lounge</a
                        >
                    </span>
                    <address>
                        Knappenstr. 36<br />
                        46238 Bottrop
                    </address>
                    <button
                        class="mt-4 text-primary bg-secondary font-bold p-2"
                        @click="downloadICS"
                    >
                        {{ $t('index.header.calendar') }}
                    </button>
                    <img
                        src="/images/mxhead002.webp"
                        alt=""
                        class="hidden md:block absolute -bottom-20 -right-28 max-h-72"
                    />
                </div>
                <p class="z-10">
                    {{ $t('index.header.socialMedia') }}
                </p>
                <div class="flex flex-row">
                    <TelegramButton />
                    <InstagramButton />
                </div>
                <div class="flex flex-row">
                    <DetailsButton />
                    <FaqButton class="ml-2" />
                </div>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
