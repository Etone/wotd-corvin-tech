import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import schedule from './wotd/assets/schedule.json'
import exercises from './wotd/assets/exercises.json'

const app = createApp(App)

app.use(PrimeVue)

app.provide('workout-schedule', schedule)
app.provide('workout-exercises', exercises)

app.mount('#app')
