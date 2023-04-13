<script setup>
defineProps(['workout'])
</script>

<template>
    <ul>
        <li v-for="hint in workout.form">
            {{ hint }}
        </li>
    </ul>
</template>

<style scoped></style>