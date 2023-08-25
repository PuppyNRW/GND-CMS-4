<script setup>
import { useI18n } from 'vue-i18n';
import TelegramButton from '../TelegramButton.vue';
import InstagramButton from '../InstagramButton.vue';
import DetailsButton from '../DetailsButton.vue';

const nextEvent = new Date('2023-10-07T21:00:00');

const { t, d } = useI18n();
</script>
<template>
    <div
        class="h-screen bg-[url('PUBLIC_DIR/images/mainbackground1.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <h1 class="text-5xl text-center text-primary font-semibold mb-3 pt-28">
            {{ t('index.header.title') }}
        </h1>
        <div class="bg-black/50">
            <div class="p-8 flex flex-col items-center">
                <p class="text-white text-justify text-xl">
                    {{ $t('index.header.subtitle') }}
                </p>
                <div
                    class="bg-white md:w-1/2 text-center text-black flex flex-col rounded p-6 relative"
                >
                    <p>{{ $t('index.header.nextEvent') }}</p>
                    <h2 class="font-bold text-3xl">{{ d(nextEvent) }}</h2>
                    <h2 class="font-bold text-3xl">ab 21:00 Uhr</h2>
                    <p class="mb-2">{{ $t('index.header.welcome') }}</p>
                    <span>
                        <i class="bi bi-geo-alt-fill"></i>
                        <a href="#direction" class="text-black"
                            >In der Eloria Bar und Lounge</a
                        >
                    </span>
                    <address>
                        Knappenstr. 36<br />
                        46238 Bottrop
                    </address>
                    <img
                        src="PUBLIC_DIR/images/mxhead002.webp"
                        alt=""
                        class="hidden md:block absolute -bottom-20 -right-28 w-1/2"
                    />
                </div>
                <p class="z-10">{{ $t('index.header.socialMedia') }}</p>
                <div class="flex flex-row">
                    <TelegramButton></TelegramButton>
                    <InstagramButton></InstagramButton>
                </div>
                <DetailsButton></DetailsButton>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
