<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <router-link
        to="/details"
        class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded-sm hover:bg-gray-400"
    >
        {{ t('details.button') }}
    </router-link>
</template>
