<script setup>
import WeekdayGreeting from './WeekdayGreeting.vue'
import ExerciseCard from './ExerciseCard.vue';
import Divider from 'primevue/divider'
import { ref, inject } from 'vue';

const schedule = inject("workout-schedule")

const today = new Date()
const dayOfWeek = today.getDay()
const todaysWorkout = ref(schedule[dayOfWeek])
</script>

<template>
    <WeekdayGreeting />
    <Divider />
    <ExerciseCard v-for="workout in todaysWorkout" :workout="workout" />
</template>

<style scoped></style>