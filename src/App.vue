<script setup>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="min-h-screen bg-black font-outfit">
        <Menu class="z-50 fixed top-0 left-0 w-full"></Menu>
        <router-view class="z-0"></router-view>
        <Footer></Footer>
    </div>
</template>
