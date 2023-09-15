<script setup>
import { useI18n } from 'vue-i18n';

const { t, d } = useI18n();

const dates = [
  {
    date: '2023-01-07',
    time: '21:00',
    remark: 'Winter Edition',
  },
  {
    date: '2023-04-01',
    time: '21:00',
    remark: 'Kombiwochenende',
  },
  {
    date: '2023-07-01',
    time: '21:00',
    remark: 'Summer Edition',
  },
  {
    date: '2023-10-07',
    time: '21:00',
    remark: 'Kombiwochenende',
  },
];

const isNextFutureDate = (dateStr) => {
  // Check if dateStr is the next future date in the list.
  //   console.log(dateStr);
  //   console.log(dates);
  //   return false;
  const currentDate = new Date();
  const nextFutureDate = dates.find((dd) => new Date(dd.date) > currentDate);
  return (
    nextFutureDate
        && new Date(dateStr).getTime() === new Date(nextFutureDate.date).getTime()
  );
};
</script>

<template>
    <div
        class="min-h-screen bg-[url('/images/mainbackground3.webp')] bg-no-repeat bg-left-top bg-cover"
    >
        <h1 class="gndH1 mb-3 pt-28">
            {{ t('index.dates.title') }}
        </h1>
        <div class="gndBGBox">
            <div class="flex flex-col">
                <h2 class="text-white text-2xl mb-6">
                    {{ $t('index.dates.subtitle') }}
                </h2>
                <table class="text-2xl my-3 hidden md:table">
                    <thead class="border-b-2 border-white">
                        <td class="font-light">{{ $t('index.dates.date') }}</td>
                        <td class="font-light">{{ $t('index.dates.time') }}</td>
                        <td class="font-light">
                            {{ $t('index.dates.remark') }}
                        </td>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(date, index) in dates"
                            :key="date.date"
                            :class="{
                                'bg-gray-800': index % 2 === 0,
                                'bg-gray-900': index % 2 !== 0,
                                'text-gray-500':
                                    new Date(date.date) < new Date(),
                                'text-blue-500 font-bold': isNextFutureDate(
                                    date.date
                                ),
                            }"
                        >
                            <td class="my-3">{{ d(new Date(date.date)) }}</td>
                            <td class="my-3">{{ date.time }}</td>
                            <td class="my-3">{{ date.remark }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="text-2xl my-3  md:hidden">
                    <thead class="boeder-b-2 border-white" >
                        <tr class="font-light">{{ $t('index.dates.date') }} {{$t('index.dates.time') }}</tr>
                        <tr class="font-light">{{ $t('index.dates.remark') }}</tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(date, index) in dates"
                            :key="date.date"
                            :class="{
                                'bg-gray-800': index % 2 === 0,
                                'bg-gray-900': index % 2 !== 0,
                                'text-gray-500':
                                    new Date(date.date) < new Date(),
                                'text-blue-500 font-bold': isNextFutureDate(
                                    date.date
                                ),
                            }"
                        >
                            <td class="my-3">{{ d(new Date(date.date)) }} {{ date.time }} <br>{{ date.remark }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <span class="my-3 flex flex-row">
                    <i class="bi bi-info-circle-fill mr-2"></i>
                    <p>{{ t('index.dates.disclaimer1') }}</p>
                </span>
                <p>
                    {{ t('index.dates.disclaimer2') }}
                </p>
            </div>
        </div>
    </div>
    <hr class="border-secondary border-t-2 py-2" />
</template>

<style scoped>
/* Target all rows except the last one */
td:not(:last-child) {
    margin-bottom: 10px; /* You can adjust the margin value as needed */
}
</style>
