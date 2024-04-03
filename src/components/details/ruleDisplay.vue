<script setup>
const props = defineProps({
  rule: Object,
});
</script>

<template>
    <div
        :class="
            props.rule.state == 'green'
                ? 'text-green-400'
                : props.rule.state == 'yellow'
                  ? 'text-yellow-400'
                  : 'text-red-400'
        "
        class="flex flex-row items-start justify-start align-middle"
    >
        <i
            class="bi mr-2 text-xl mt-1"
            :class="
                props.rule.state == 'green'
                    ? 'bi-check-circle-fill'
                    : props.rule.state == 'yellow'
                      ? 'bi-exclamation-triangle-fill'
                      : 'bi-x-square-fill'
            "
        ></i>
        <div class="fles flex-col">
            <h2 class="text-2xl">{{ props.rule.title }}</h2>
            <p class="text-xl">{{ props.rule.description }}</p>
        </div>
    </div>
</template>
