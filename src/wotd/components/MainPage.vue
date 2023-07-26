<script setup>
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
    let levels = useStorage('levels', {})
    Object.keys(levels.value).forEach((exercise) => {
        levels.value[exercise] = 1
    })
}
</script>

<template>
    <div v-for="workout in todaysWorkout">
        <ExerciseCard  :workout="workout" />
        <Divider />
    </div>
    <Button label="RESET LOCAL STROAGE" @click="reset()" />
</template>

<style scoped></style>