<script setup>
const photos = [
    {
        name: 'Spezialeinheit mit Gasmaske (schwarz)',
        link: '/images/rubbergimp002.webp',
        creator: 'Duze',
        profile: 'https://www.instagram.com/duzepup/',
        date: '2022-08-27',
    },
    {
        name: 'SUMBRELLA Corp. Einheit mit Visier',
        link: '/images/umbrella.webp',
        creator: 'Pup Nyx',
        profile: 'https://www.instagram.com/nyxx.photography',
        date: '2022-08-27',
    },
]
</script>
<template>
  <div class="pt-28 mx-4 md:mx-8 flex flex-col">
    <h1 class="text-primary text-5xl my-3">
      Bildnachweis
    </h1>
    <p class="text-2xl my-3">
      Liste aller Fotos, die nicht vom Gear'n'Dance Team gemacht worden
      sind.
    </p>
    <table class="text-2xl my-3">
      <thead class="border-b-2 border-white">
        <td class="font-light">
          Bild
        </td>
        <td class="font-light">
          Urheber
        </td>
        <td class="font-light">
          Profil
        </td>
        <td class="font-light">
          Datum
        </td>
      </thead>
      <tbody>
        <tr
          v-for="(photo, index) in photos"
          :key="photo.name"
          :class="{
            'bg-gray-800': index % 2 === 0,
            'bg-gray-900': index % 2 !== 0,
          }"
        >
          <td class="my-3">
            <a
              class="text-primary"
              :href="photo.link"
            >{{
              photo.name
            }}</a>
          </td>
          <td class="my-3">
            {{ photo.creator }}
          </td>
          <td class="my-3">
            <a
              :href="photo.profile"
              target="_blank"
              class="text-primary"
            ><i class="bi bi-link" /></a>
          </td>
          <td class="my-3">
            {{ photo.date }}
          </td>
        </tr>
      </tbody>
    </table>
    <p class="text-xl my-3">
      Alle Fotos sind von den jeweiligen Urhebern zur Verwendung auf
      dieser Website genehmigt worden. Eine weitere Verwendung auf anderen
      Websites oder Medien außerhalb der Gear'n'Dance Veranstaltung ist
      nicht gestattet.
    </p>
  </div>
</template>
