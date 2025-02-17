<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="flex flex-col bg-black font-outfit min-h-screen">
        <Menu class="z-50 fixed top-0 left-0 w-full" />
        <router-view class="grow z-0" />
        <Footer class="z-0" />
    </div>
</template>

<style></style>
