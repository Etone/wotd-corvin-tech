import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'


import MainPage from './components/MainPage.vue'

const app = createApp(App)

app.use(PrimeVue)

app.mount('#app')
