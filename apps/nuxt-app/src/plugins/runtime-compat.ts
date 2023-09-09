import { configureCompat } from 'vue';
import { defineNuxtPlugin } from 'nuxt/app';
import { applicationRuntimeCompatConfig } from '../compat';

export default defineNuxtPlugin(_ => configureCompat(applicationRuntimeCompatConfig()));
