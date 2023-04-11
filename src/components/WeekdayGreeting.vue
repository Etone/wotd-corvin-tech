<script setup>
import { onMounted, ref } from 'vue';
import Card from 'primevue/card'

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