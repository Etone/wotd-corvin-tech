<script setup>
import { useStorage } from '@vueuse/core'
import { inject, onMounted } from 'vue';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
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
    return exercises[workout][levels.value[workout]-1]
}

</script>

<template>
    <Card>
        <template #header>
            <ExerciseVideo :src="currentWorkout(workout).video"/>
        </template>
        <template #title>{{ workout }}</template>
        <template #subtitle>Level {{ levels[workout] }} - {{ currentWorkout(workout).name }}</template>
        <template #content>
            <ExerciseDetails :workout="currentWorkout(workout)" />
        </template>
        <template #footer>
            <Button icon="pi pi-plus" label="Complete Level" @click="completeLevel(workout)" />
        </template>
    </Card>
</template>

<style scoped>
.p-card {
    max-width: 25em;
    display: block;
    margin: auto;
}

</style>