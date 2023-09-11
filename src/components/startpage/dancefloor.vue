<script setup>
import { useI18n } from 'vue-i18n';
import DetailsButton from '../DetailsButton.vue';

const { t } = useI18n();
</script>
<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground2.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <h1 class="gndH1 mb-3 pt-28">{{ t('index.dancefloor.title') }}</h1>
        <div class="gndBGBox">
            <div class="flex flex-col-reverse md:flex-row">
                <div class="md:w-2/5 flex items-end bg-transparent">
                    <img
                        src="/images/rubbergimp002.webp"
                        alt=""
                        class=""
                    />
                </div>
                <div class="md:w-3/5">
                    <div class="my-3 flex flex-col items-center text-left">
                        <h2 class="text-3xl py-3">
                            {{ $t('index.dancefloor.gearhead') }}
                        </h2>
                        <p class="text-white text-justify text-xl">
                            {{ $t('index.dancefloor.gearheadSubtitle') }}
                        </p>
                        <h2 class="text-3xl text-left py-3">
                            {{ $t('index.dancefloor.dresscode') }}
                        </h2>
                        <p class="text-white text-justify text-xl">
                            {{ $t('index.dancefloor.dresscodeSubtitle') }}
                        </p>
                    </div>
                    <div class="py-3">

                        <DetailsButton></DetailsButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
