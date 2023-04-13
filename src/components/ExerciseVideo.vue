<script setup>
import { watch, ref } from 'vue';

const props = defineProps(['src'])
const video = ref('video')

watch(() => props.src, () => {
    video.value.load()
})
</script>

<template>
    <div class="video-mask">
        <video controls autoplay muted loop width="320" height="240" ref="video">
            <source :src="src" type="video/mp4" />
        </video>
    </div>
</template>

<style scoped>
video {
    display: block;
    margin: auto;
    width: 100%;
    height: 100%;
}

.video-mask {
    display: block;
    margin: auto;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
}
</style>