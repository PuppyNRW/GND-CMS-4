<script setup>
import Vision from '../components/details/vision.vue'
import Location from '../components/details/location.vue'
import Directions from '../components/details/directions.vue'
import Rules from '../components/details/rules.vue'
import FaqComponent from '../components/FaqComponent.vue'
</script>

<template>
  <Vision />
  <Location />
  <Directions />
  <Rules />
  <div
    id="faq"
    class="bg-[url('/images/mainbackground1.webp')] bg-no-repeat bg-left-top bg-cover"
  >
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <FaqComponent />
      </div>
    </div>
  </div>
</template>
