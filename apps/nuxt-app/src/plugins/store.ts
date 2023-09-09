import { defineNuxtPlugin } from 'nuxt/app';
import { createStore } from '../store/store';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(createStore());
});
