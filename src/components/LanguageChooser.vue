<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';

const { locale } = useI18n();

const showMenu = ref(false);

const getNameForLoc = (l) => {
  switch (l) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    case 'nl':
      return 'Nederlands';
    default:
      return l;
  }
};

const changeLanguage = () => {
  window.localStorage.setItem('esclocale', locale.value);
};
</script>

<template>
    <div class="zero-box overflow-visible">
        <button
            id="lng-menu-btn"
            type="button"
            class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded no-underline bg-gray-900 text-white hover:bg-gray-900 py-1 px-2 leading-tight text-xs language-button"
            @click="showMenu = !showMenu"
        >
            <i class="bi bi-translate button-icon text-2xl text-primary"></i>
        </button>
        <div id="lng-menu-card" :class="showMenu ? '' : 'hidden'">
            <div
                class="cursor-pointer relative flex flex-col bg-secondary/75 backdrop-blur-sm min-w-0 rounded break-words border md:mr-8 mt-3 mr-12"
            >
                <ul
                    class="flex flex-col pl-0 mb-0 border rounded border-gray-300 text-primary"
                >
                    <li
                        v-for="l in $i18n.availableLocales"
                        :key="l"
                        class="flex flex-row py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300"
                        @click="$i18n.locale = l; changeLanguage(l);showMenu = false "
                    >
                        <img :src="'/gfx/' + l + '.png'" class="mr-2" />
                        {{ getNameForLoc(l) }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
