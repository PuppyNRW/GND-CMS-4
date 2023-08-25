<script setup>
import LanguageChooser from './LanguageChooser.vue';
</script>

<template>
    <div class="flex flex-row justify-between items-center0">
        <router-link to="/">
            <img
                src="/gfx/green_logo_ue.webp"
                alt="GND Logo"
                class="h-24 m-2"
            />
        </router-link>
        <LanguageChooser></LanguageChooser>
    </div>
</template>
