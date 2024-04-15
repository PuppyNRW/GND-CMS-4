<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div
    class="min-h-screen bg-[url('/images/mainbackground2.webp')] bg-no-repeat bg-left-top bg-cover"
  >
    <div class=" ">
      <h1 class="gndH1 mb-3 pt-28">
        {{ t('details.vision.title') }}
      </h1>
      <div class="flex flex-col md:flex-row items-end gndBGBox">
        <div class="prose prose-invert prose-lg text-justify md:w-3/5">
          <h2>{{ t('details.vision.subtitle') }}</h2>
          <p>{{ t('details.vision.text') }}</p>
        </div>
        <img
          class="md:w-2/5 object-contain h-[30rem]"
          src="/images/umbrellaguy.webp"
          alt="umbrellaguy"
        >
      </div>
    </div>
  </div>
  <hr class="border-secondary border-t-2 py-2">
</template>
