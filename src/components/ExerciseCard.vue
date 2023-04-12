<script setup>
import { useStorage } from '@vueuse/core'
import { inject, onMounted } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button'

const exercises = inject('workout-exercises')

const levels = useStorage('levels', {
    Pushups: 1,
    "Leg Raises": 1,
    Bridges: 1,
    Twists: 1,
    Pullups: 1,
    Squats: 1,
})

const todaysWorkouts = defineProps(['todaysWorkouts'])

const logLevels = () => {
    console.log(levels.value.Bridges)
}

</script>

<template>
    <Card>
        <template #title>{{ todaysWorkouts }}</template>
        <template #content>
            <p>{{ exercises }}</p>
            <p>{{ levels }}</p>
        </template>
        <template #footer>
            <Button label="Save" @click="logLevels"/>
        </template>
    </Card>
</template>