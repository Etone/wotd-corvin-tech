<script setup>
import { useStorage } from '@vueuse/core'
import { inject, onMounted } from 'vue';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Button from 'primevue/button'
import ExerciseDetails from './ExerciseDetails.vue'

const exercises = inject('workout-exercises')

const levels = useStorage('levels', {
    Bridges: 1,
    Pullups: 1,
    Pushups: 1,
    Squats: 1,
    Twists: 1,
    "Leg Raises": 1,
})

defineProps(['todaysWorkouts'])

const completeLevel = (workout) => {
    levels.value[workout] += 1
}

</script>

<template>
    <Card v-for="workout in todaysWorkouts">
        <template #header>
            <video controls autoplay muted loop width="320" height="240">
                <source src="../assets/loops/glute-bridge.mp4" type="video/mp4" />
            </video>
        </template>
        <template #title>{{ workout }} (current Level: {{ levels[workout] }})</template>
        <template #content>
            <ExerciseDetails :workout="exercises[workout][levels[workout] - 1]" />
        </template>
        <template #footer>
            <Button icon="pi pi-plus" label="Complete Level" @click="completeLevel(workout)" />
        </template>
    </Card>
    <Divider />
</template>