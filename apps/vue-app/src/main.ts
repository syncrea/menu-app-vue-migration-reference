import { createApp, configureCompat } from 'vue';
import { applicationRuntimeCompatConfig } from './compat';
import App from './App.vue';

import './assets/main.css';
import { createStore } from './store/store';

configureCompat(applicationRuntimeCompatConfig());

const app = createApp(App);

app.use(createStore());
app.mount('#app');
