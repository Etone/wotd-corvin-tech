<script setup>
import { onMounted, ref } from 'vue';
import Divider from 'primevue/divider';
import Listbox from 'primevue/listbox';

const weekday = ref('Montag')
const todaysWorkout = ref([])
const workouts = {
    0: [],
    1: [],
    2: ["Pullups", "Squats"],
    3: [],
    4: [],
    5: [],
    6: [],
}

onMounted(() => {
    let currentDay = new Date()
    todaysWorkout.value = workouts[currentDay.getDay()].join(", ")
    weekday.value = currentDay.toLocaleDateString(undefined, { weekday: 'long' })
})

</script>

<template>
    <h1>{{ weekday }}</h1>
    <p>Todays routine: </p>
    <p>{{ todaysWorkout }}</p>
    <Divider />
</template>

<style scoped>
h1 {
    justify-content: center;
    text-align: center;
}
</style>