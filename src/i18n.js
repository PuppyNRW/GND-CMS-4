import { createI18n as createVueI18n } from 'vue-i18n'

// Import available languages
import { en, de, nl } from './assets/locale/index'

const messages = {
    // English translation
    en,
    // German translation
    de,
    // Dutch translation
    nl,
}

const locale = window.localStorage.getItem('esclocale') || 'de'

const i18n = createVueI18n({
    locale,
    messages,
    fallbackLocale: 'de',
    allowComposition: true,
})

export { i18n }
