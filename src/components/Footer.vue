<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
    <div class="flex flex-col">
        <!-- <hr class="border-secondary border-t-2 py-2"> -->
        <div
            class="flex flex-col md:flex-row items-center justify-center text-primary"
        >
            <router-link to="/impressum" class="mx-2">{{
                t('footer.imprint')
            }}</router-link>
            <router-link to="/datenschutz" class="mx-2">{{
                t('footer.privacy')
            }}</router-link>
            <router-link to="/haftung" class="mx-2">{{
                t('footer.liability')
            }}</router-link>
            <router-link to="/bildnachweis" class="mx-2">{{
                t('footer.credit')
            }}</router-link>
        </div>
        <div class="text-white text-sm text-center pb-3">
            Diese Veranstaltung wird von Puppy & Friends NRW e.V in Kooperation
            mit der Eloria Erlebniswelt GmbH durchgeführt.<br />
            Die Website basiert auf dem Design von Pup Duke.<br />
            Service icons made by Freepik from www.flaticon.com<br />
        </div>
    </div>
</template>
