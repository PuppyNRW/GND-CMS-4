<script setup>
import { useI18n } from 'vue-i18n'

const { t, n } = useI18n()
</script>
<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground9.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <h1 class="gndH1 mb-3 pt-28">
            {{ t('index.prices.title') }}
        </h1>
        <div class="gndBGBox">
            <div class="flex flex-col">
                <h3 class="text-2xl my-3">
                    {{ t('index.prices.subtitle') }}
                </h3>
                <p class="my-3">
                    {{ t('index.prices.valid') }}
                </p>
                <span class="my-3 text-warning flex flex-row">
                    <i class="bi bi-exclamation-triangle-fill mr-2" />
                    <p>{{ t('index.prices.boxOffice') }}</p>
                </span>
                <table>
                    <tr class="bg-gray-700 text-xl">
                        <td>{{ t('index.prices.onlineTicket') }}</td>
                        <td>{{ n(16.0) }}&thinsp;€</td>
                    </tr>
                    <tr class="bg-gray-600 text-xl">
                        <td>{{ t('index.prices.coat') }}</td>
                        <td>{{ n(2.0) }}&thinsp;€</td>
                    </tr>
                    <tr class="bg-gray-700 text-xl">
                        <td>{{ t('index.prices.parking') }}</td>
                        <td>{{ t('index.prices.freeofcharge') }}</td>
                    </tr>
                </table>
                <p class="my-3">
                    {{ t('index.prices.limited') }}
                </p>
                <router-link
                    to="/tickets"
                    class="text-xl cursor-pointer text-primary mx-auto border border-gray-400 p-3 rounded-sm hover:bg-gray-400"
                >
                    {{ t('index.prices.buyButton') }}
                </router-link>
                <span class="my-3 text-warning flex flex-row mx-auto">
                    <i class="bi bi-exclamation-triangle-fill mr-2" />
                    <p>{{ t('index.prices.languageDisclaimer') }}</p>
                </span>
                <span class="my-3 flex flex-row">
                    <i class="bi bi-info-circle-fill mr-2" />
                    <p>{{ t('index.prices.prepaid') }}</p>
                </span>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>
