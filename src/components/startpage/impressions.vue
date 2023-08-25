<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground6.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <h1 class="gndH1 mb-3 pt-28">
            {{ $t('index.impressions.title') }}
        </h1>
        <div class="gndBGBox">
            <div class="flex flex-col">
                <h2 class="text-white text-2xl mb-6">
                    {{ $t('index.impressions.subtitle') }}
                </h2>
                <p>
                    {{ t('index.impressions.text') }}
                </p>
                <div class="flex flex-col md:flex-row mt-4 items-center">
                    <div class="flex flex-col md:w-1/3 mb-4">
                        <img
                            class="h-40 object-contain mb-4"
                            src="/public/images/photowall.webp"
                            alt="Photowall"
                        />
                        <router-link
                            to="/photowall"
                            class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded hover:bg-gray-400"
                            >{{
                                t('index.impressions.buttonWall')
                            }}</router-link
                        >
                    </div>
                    <div class="flex flex-col md:w-1/3 mb-4">
                        <img
                            class="h-40 object-contain mb-4"
                            src="/public/images/youtube.webp"
                            alt="Youtube"
                        />
                        <a
                            href="https://www.youtube.com/channel/UCVdBYMUXGfPZgRkd2W8jG2w"
                            target="_blank"
                            class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded hover:bg-gray-400"
                            >{{ t('index.impressions.buttonYoutube') }}</a
                        >
                    </div>
                    <div class="flex flex-col md:w-1/3 mb-4">
                        <img
                            class="h-40 object-contain mb-4"
                            src="/public/images/inqueery.webp"
                            alt="Inquery"
                        />
                        <a
                            href="https://www.inqueery.de/fotos?title=gear%27n%27dance&field_partyid_nid=All&stadt=&radius=0&datum%5Bvalue%5D%5Bmonth%5D=&datum%5Bvalue%5D%5Byear%5D="
                            target="_blank"
                            class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded hover:bg-gray-400"
                            >{{ t('index.impressions.buttonInqueery') }}</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
