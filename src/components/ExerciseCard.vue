<script setup>
import { useStorage } from '@vueuse/core'
import { inject } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button'
import ExerciseDetails from './ExerciseDetails.vue'
import ExerciseVideo from './ExerciseVideo.vue'

const exercises = inject('workout-exercises')

const levels = useStorage('levels', {
    Bridges: 1,
    Pullups: 1,
    Pushups: 1,
    Squats: 1,
    Twists: 1,
    "Leg Raises": 1,
})

defineProps(['workout'])

const completeLevel = (workout) => {
    if (levels.value[workout] >= exercises[workout].length) {
        alert("Cant increase level, you are at the top already")
    } else {
        levels.value[workout] += 1
    }
}

const currentWorkout = (workout) => {
    return exercises[workout][levels.value[workout] - 1]
}

</script>

<template>
    <Card>
        <template #header>
            <ExerciseVideo :src="currentWorkout(workout).video" />
        </template>
        <template #title>{{ workout }}</template>
        <template #subtitle><a :href="currentWorkout(workout).link" target="_blank">Level {{ levels[workout] }} - {{
            currentWorkout(workout).name }}</a></template>
        <template #content>
            <ExerciseDetails :workout="currentWorkout(workout)" />
        </template>
        <template #footer>
            <Button icon="pi pi-check" :label="currentWorkout(workout).sets" @click="completeLevel(workout)" />
        </template>
    </Card>
</template>

<style scoped>
.p-card {
    max-width: 25em;
    display: block;
    margin: auto;
}

.p-card-subtitle>a {
    color: inherit;
}

.p-card-footer > button{
    display: block;
    margin: auto;
}
</style>