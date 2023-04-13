<script setup>
import Divider from 'primevue/divider'

defineProps(['workout'])
</script>

<template>
    <div class="flex-container">
        <div class="flex-child">
            <a :href="workout.link">Instructions</a>
            <p>Goal: {{ workout.sets }}</p>
        </div>
        <div class="flex-child">
            <ul>
                <li v-for="hint in workout.form">
                    {{ hint }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
}
</style>