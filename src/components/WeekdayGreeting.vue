<script setup>
import { inject, onMounted, ref } from 'vue';
import Card from 'primevue/card'

const weekday = ref('Montag')
const todaysWorkout = ref([])
const workouts = inject('workout-schedule')

onMounted(() => {
    let currentDay = new Date()
    todaysWorkout.value = workouts[currentDay.getDay()].join(", ")
    weekday.value = currentDay.toLocaleDateString(undefined, { weekday: 'long' })
})

</script>

<template>
    <Card>
        <template #title>
            {{ weekday }}
        </template>
        <template #content>
            <p>{{ todaysWorkout }}</p>
        </template>
    </Card>
</template>

<style scoped>
</style>