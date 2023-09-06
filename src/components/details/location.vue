<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground8.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <div class="my-4 flex flex-col">
            <h1 class="gndH1 mb-3 my-4">
                {{ t('details.location.title') }}
            </h1>
            <div class="gndBGBox">
                <div class="text-justify prose prose-lg prose-invert">
                    <h2 class="">{{ t('details.location.subtitle') }}</h2>
                    <p class="">{{ t('details.location.text1') }}</p>
                    <p class="">{{ t('details.location.text2') }}</p>
                </div>
                <div class="flex md:flex-row flex-col">
                    <img
                        class="mx-3 md:w-[48%] my-4"
                        src="/images/barbereich.png"
                        alt="Barbereich"
                    />
                    <img
                        class="mx-3 md:w-[48%] my-4"
                        src="/images/dancefloor.png"
                        alt="Dancefloor"
                    />
                </div>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
