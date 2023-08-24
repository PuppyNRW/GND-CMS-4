<script setup>
import { useI18n } from 'vue-i18n';
import RuleDisplay from './ruleDisplay.vue';

const { t } = useI18n();

const rules = [
  'mood',
  'dresscode',
  'curious',
  'covid',
  'sex',
  'drink',
  'sexism',
  'drugs',
].map((name) => ({
  name,
  title: t(`details.rules.${name}.title`),
  description: t(`details.rules.${name}.description`),
  state: ['mood', 'dresscode', 'curious'].includes(name) ? 'green'
    : ['covid', 'sex'].includes(name) ? 'yellow' : 'red',
}));
</script>

<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground11.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <div class="mx-2 md:mx-10 my-4 flex flex-col">
            <h1 class="gndH1 mb-3 my-4">
                {{ t('details.rules.title') }}
            </h1>
            <h2 class="text-3xl my-3">{{ t('details.rules.subtitle') }}</h2>
            <p class="text-lg my-3">{{ t('details.rules.text') }}</p>
            <div v-for="rule in rules" :key="rule.name">
                <RuleDisplay :rule="rule"></RuleDisplay>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
