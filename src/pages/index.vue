<script setup>
// import { useI18n } from 'vue-i18n';
// import LanguageChooser from '../components/LanguageChooser.vue';

// const { t } = useI18n();

// const getDynamicTranslation = () => `${t('greeting.subtitle')}!`;
import Header from '../components/startpage/header.vue';
import Dancefloor from '../components/startpage/dancefloor.vue';
import Prices from '../components/startpage/prices.vue';
import Dates from '../components/startpage/dates.vue';
import Impressions from '../components/startpage/impressions.vue';
</script>

<template>
    <Header ></Header>
    <Dancefloor></Dancefloor>
    <Prices></Prices>
    <Dates></Dates>
    <Impressions></Impressions>
</template>

<style></style>
