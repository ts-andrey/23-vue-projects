import './util/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import BaseCard from './ui/BaseCard.vue';
import BaseLogo from './ui/BaseLogo.vue';
import BaseButton from './ui/BaseButton.vue';

const app = createApp(App);

app.use(router);
app.use(store);



app.component('base-card', BaseCard);
app.component('base-logo', BaseLogo);
app.component('base-button', BaseButton);

app.mount('#app');
