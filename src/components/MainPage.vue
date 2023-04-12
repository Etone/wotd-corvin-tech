<script setup>
import WeekdayGreeting from './WeekdayGreeting.vue'
import ExerciseCard from './ExerciseCard.vue';
import Divider from 'primevue/divider'
import Button from 'primevue/button';
import { ref, inject } from 'vue';
import { useStorage } from '@vueuse/core';

const schedule = inject("workout-schedule")

const today = new Date()
const dayOfWeek = today.getDay()
const todaysWorkout = ref(schedule[dayOfWeek])

const reset = () => {
    let localstorage = useStorage('levels')
    localstorage.value = null
}
</script>

<template>
    <WeekdayGreeting />
    <Divider />
    <ExerciseCard v-for="workout in todaysWorkout" :workout="workout" />
    <Button label="RESET LOCAL STROAGE" @click="reset()" />
</template>

<style scoped></style>