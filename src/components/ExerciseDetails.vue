<script setup>
defineProps(['workout'])
</script>

<template>
    <p>{{ workout.name }}</p>
    <a :href="workout.link">Instructions</a>
    <p>Goal: {{ workout.sets }}</p>
</template>