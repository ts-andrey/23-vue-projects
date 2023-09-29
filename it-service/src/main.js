import './util/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BaseCard from './ui/BaseCard.vue';
import BaseLogo from './ui/BaseLogo.vue';

const app = createApp(App);

app.use(router);
app.component('base-card', BaseCard);
app.component('base-logo', BaseLogo)

app.mount('#app');
