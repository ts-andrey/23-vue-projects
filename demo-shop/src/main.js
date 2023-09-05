import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);

app.component('base-badge', BaseBadge);

app.mount('#app');
