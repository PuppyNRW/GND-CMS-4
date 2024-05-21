<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline'
import { ref, watch, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { faqDE } from '../assets/locale/faq_de'
import { faqEN } from '../assets/locale/faq_en'
import { faqNL } from '../assets/locale/faq_nl'

const { locale } = useI18n()
const route = useRoute()

const faqs = ref([])
const openTag = ref(null)
const disclosureRefs = ref({})

const updateFAQ = () => {
    if (locale.value === 'en') {
        faqs.value = faqEN
    } else if (locale.value === 'nl') {
        faqs.value = faqNL
    } else {
        faqs.value = faqDE
    }
}

const openFAQFromHash = () => {
    const hash = route.hash.replace('#', '')
    if (hash) {
        openTag.value = hash
        nextTick(() => {
            if (disclosureRefs.value[hash]) {
                disclosureRefs.value[hash].$el.click()
            }
        })
    }
}

watch(locale, () => {
    updateFAQ()
    openFAQFromHash()
})

watch(route, () => {
    openFAQFromHash()
})

updateFAQ()
onMounted(() => {
    openFAQFromHash()
})
</script>

<template>
  <h2 class="text-2xl font-bold leading-10 tracking-tight text-primary">
    Frequently Asked Questions
  </h2>
  <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
    <Disclosure
      v-for="faq in faqs"
      :key="faq.question"
      v-slot="{ open }"
      as="div"
      class="pt-6"
    >
      <dt>
        <DisclosureButton
          :ref="(el) => (disclosureRefs[faq.tag] = el)"
          class="flex w-full items-start justify-between text-left text-white"
        >
          <span
            :id="faq.tag"
            class="text-base font-semibold leading-7"
          >{{ faq.question }}</span>
          <span class="ml-6 flex h-7 items-center">
            <PlusSmallIcon
              v-if="!open"
              class="h-6 w-6"
              aria-hidden="true"
            />
            <MinusSmallIcon
              v-else
              class="h-6 w-6"
              aria-hidden="true"
            />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel
        as="dd"
        class="mt-2 pr-12"
      >
        <p
          class="text-base leading-7 text-white"
          v-html="faq.answer"
        />
      </DisclosurePanel>
    </Disclosure>
  </dl>
</template>
