<script setup>
import WeekdayGreeting from './WeekdayGreeting.vue'
import ExerciseCard from './ExerciseCard.vue';
import Divider from 'primevue/divider'
import { ref } from 'vue';

const todaysWorkout = ref()
</script>

<template>
    <WeekdayGreeting />
    <Divider />
    <ExerciseCard />
</template>