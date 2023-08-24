<script setup>
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';

const { t, locale } = useI18n();

const shopError = ref(false);
const shopEnabled = ref(true);
const saleValidUntil = new Date('2023-12-31');
const saleStart = new Date('2023-01-01');
const eventURL = 'https://tickets.pupplay.nrw/gnd/gnd10-23/';
const resendURL = ref('');

onMounted(() => {
  const script = document.createElement('script');
  script.src = `https://tickets.pupplay.nrw/widget/v1.${locale.value}.js`;
  script.async = true;
  document.body.appendChild(script);
  resendURL.value = `${eventURL}resend/`;
});

</script>

<template>
    <div class="min-h-screen bg-[url('/images/mainbackground1.webp')] bg-no-repeat bg-left-top bg-cover">

        <div class="pt-28 mx-4 md:mx-8 flex flex-col z-10">
            <h1 class="gndH1 mb-3">{{ t('tickets.title') }}</h1>
            <h2 class="text-3xl">{{ t('tickets.subtitle') }} </h2>
            <p class="my-4">{{ t('tickets.text1') }}</p>
            <p class="my-4">{{ t('tickets.text2') }}</p>
            <div class="flex flex-row">
                <i class="bi bi-geo-alt-fill mr-2"></i>
                <address class="not-italic">ELORIA – Erlebnisfabrik, Knappenstraße 36, 46238 Bottrop</address>
            </div>
            <div v-if="shopError">
                <p class="text-red-600 text-center bg-gray-900 p-6">
                    <i class="bi bi-x-circle-fill"></i><br />Shop error
                </p>
            </div>
            <div v-else>
                <div v-if="shopEnabled && saleValidUntil > new Date()">
                    <div v-if="new Date() < saleStart">
                        <p>
                            <center>
                                <i class="bi bi-arrow-right-short"></i> sale start
                            </center>
                        </p>
                    </div>
                    <div v-else class="bg-white/20">

                        <pretix-widget :event="eventURL"></pretix-widget>
                        <noscript>
                            <p>{{ t('tickets.noScript') }}bb</p>
                            <p><a :href="shopURL" class="gndbtn">{{ t('tickets.shopURLText') }}</a></p>
                        </noscript>
                    </div>
                </div>
                <div v-else>
                    <p>
                        <center>
                            <i class="bi bi-arrow-right-short"></i> {{ t('tickets.noSale') }}
                        </center>
                    </p>
                </div>
            </div>
            <div class="flex flex-row">
                <i class="bi bi-info-circle-fill mr-2"></i>
                <p>{{ t('tickets.disclaimer') }}</p>
            </div>
            <a :href="resendURL" target="_blank" class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded hover:bg-gray-400">{{ t('tickets.resendButton') }}</a>
        </div>
    </div>
</template>
