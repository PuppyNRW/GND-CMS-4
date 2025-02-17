<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground11.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <div class="mx-2 my-4 flex flex-col">
            <h1 class="gndH1 mb-3 my-4">
                {{ t('details.directions.title') }}
            </h1>
            <div class="gndBGBox">
                <h2 class="">
                    {{ t('details.directions.subtitle') }}
                </h2>
                <div class="bg-white/25 md:w-[75%] mx-auto my-4">
                    <img src="/images/direction.png" alt="Anfahrt" />
                </div>
                <div class="flex md:flex-row flex-col">
                    <div
                        class="flex flex-col prose prose-lg prose-invert md:w-[48%]"
                    >
                        <h2>{{ t('details.directions.car.title') }}</h2>
                        <p>{{ t('details.directions.car.text1') }}</p>
                        <ul>
                            <li>
                                {{ t('details.directions.car.directions') }}
                            </li>
                        </ul>
                        <p>{{ t('details.directions.car.text2') }}</p>
                        <p>{{ t('details.directions.car.text3') }}</p>
                        <p>{{ t('details.directions.car.text4') }}</p>
                    </div>
                    <div
                        class="flex flex-col prose prose-lg prose-invert md:w-[48%]"
                    >
                        <h2>{{ t('details.directions.public.title') }}</h2>
                        <ul>
                            <li>
                                {{ t('details.directions.public.directions1') }}
                            </li>
                            <li>
                                {{ t('details.directions.public.directions2') }}
                            </li>
                            <li>
                                {{ t('details.directions.public.directions3') }}
                            </li>
                            <li>
                                {{ t('details.directions.public.directions4') }}
                            </li>
                        </ul>
                        <p>{{ t('details.directions.public.text') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
