<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <div class="pt-28 mx-4 md:mx-8 leading-6">
        <h1 class="font-bold text-5xl text-primary my-4">
            {{ t('impressum.title') }}
        </h1>
        <h2 class="font-bold text-3xl my-4">{{ t('impressum.subtitle') }}</h2>
        <div class="text-2xl my-4">
            <i class="bi bi-caret-right-fill"></i>
            {{ t('impressum.addressTitle') }}
            <address class="ml-8 not-italic text-xl">
                ELORIA Erlebnisfabrik <br />
                Knappenstraße 36 <br />
                46238 Bottrop
            </address>
        </div>
        <div class="text-2xl my-4">
            <i class="bi bi-caret-right-fill"></i>
            {{ t('impressum.responsible') }}
            <p class="ml-8 not-italic text-xl">
                Puppy & Friends NRW e.V. <br />
                c/o Aids Hilfe Düsseldorf e.V. <br />
                Johannes-Weyer-Straße 1 <br />
                40225 Düsseldorf <br />
                Deutschland <br />
                Mail: info(at)puppy.nrw <br />
                Telefonnummer: +49–201-630199-30
            </p>
        </div>
        <p>{{ t('impressum.represent') }}</p>
        <ul class="list-disc ml-8">
            <li>{{ t('impressum.representative1') }}</li>
            <li>{{ t('impressum.representative2') }}</li>
            <li>{{ t('impressum.representative3') }}</li>
        </ul>
        <p>{{ t('impressum.register') }}</p>
        <p>{{ t('impressum.tax') }}</p>
        <p>{{ t('impressum.content1') }}</p>
        <p>{{ t('impressum.content2') }}</p>
        <p>{{ t('impressum.content3') }}</p>
    </div>
</template>

<style scoped>
p {
    @apply text-xl my-5;
}

li {
    @apply text-xl;
}
</style>
