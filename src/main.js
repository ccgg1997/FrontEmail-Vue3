import { createApp } from 'vue';
import App from './App.vue';
import "./index.css";
import store from './store';
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App);

app.use(store);
// add Auth0.
app.use(vue3GoogleLogin, {
    clientId: '614306242665-6hoigdk84igcf1p2kmlboklq9ij8j9bj.apps.googleusercontent.com'
  })

app.mount('#app');
