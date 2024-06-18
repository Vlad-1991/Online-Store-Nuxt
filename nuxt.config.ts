// https://nuxt.com/docs/api/configuration/nuxt-config

import { createPinia } from 'pinia'
const pinia = createPinia()


export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ]
  ],
  css: ['~/theme.css'],
  plugins: [
    '~/plugins/fontawesome'
  ],
   components: true, // Автоматична реєстрація компонентів
   vue: {
      // Налаштування завантажувача для обробки файлів Pug
      loaderOptions: {
        pug: {
          // Включаємо можливість використання синтаксису Pug в компонентах Vue.js
          enabled: true,
          // Опції, які можна налаштувати для завантажувача Pug
          // Наприклад, можна задати глобальні параметри, що передаються в шаблони
          // globals: ['variableName']
        }
      }
    }
})
