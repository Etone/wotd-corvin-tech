<script setup>
import { useStorage } from "@vueuse/core";
import { inject, ref } from "vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Sidebar from "primevue/sidebar";
import ExerciseVideo from "./ExerciseVideo.vue";
import ListDetails from "./ListDetails.vue";

defineProps(["workout"]);

const exercises = inject("workout-exercises");

const levels = useStorage("levels", {
  Bridges: 1,
  Pullups: 1,
  Pushups: 1,
  Squats: 1,
  Twists: 1,
  "Leg Raises": 1,
});

const instructionsVisible = ref(false);
const formVisible = ref(false);

const completeLevel = (workout) => {
  if (levels.value[workout] >= exercises[workout].length) {
    alert("Cant increase level, you are at the top already");
  } else {
    levels.value[workout] += 1;
  }
};

const currentWorkout = (workout) => {
  return exercises[workout][levels.value[workout] - 1];
};

const currentWorkoutLink = (workout) => {
  let link = currentWorkout(workout)
    .name.split(" ")
    .map((str) => str.toLowerCase())
    .join("-");
  return `https://www.hybridcalisthenics.com/${link}`;
};
</script>

<template>
  <Card>
    <template #header>
      <ExerciseVideo :src="currentWorkout(workout).video" />
    </template>
    <template #title>{{ workout }}</template>
    <template #subtitle
      ><a :href="currentWorkoutLink(workout)" target="_blank"
        >Level {{ levels[workout] }} - {{ currentWorkout(workout).name }}</a
      ></template
    >
    <template #content>
      <div class="flex">
        <Sidebar v-model:visible="instructionsVisible">
          <h2>Instructions</h2>
          <ListDetails :items="currentWorkout(workout).tutorial" />
        </Sidebar>

        <Sidebar v-model:visible="formVisible">
          <h2>Form Cues</h2>
          <ListDetails :items="currentWorkout(workout).form" />
        </Sidebar>

        <Button
          icon="pi pi-info-circle"
          label="Instructions"
          @click="instructionsVisible = true"
        />
        <Button
          icon="pi pi-info-circle"
          label="Form"
          @click="formVisible = true"
        />
      </div>
    </template>
    <template #footer>
      <Button
        icon="pi pi-check"
        :label="currentWorkout(workout).sets"
        @click="completeLevel(workout)"
      />
    </template>
  </Card>
</template>

<style scoped>
.p-card {
  max-width: 25em;
  display: block;
  margin: auto;
}

.p-card-subtitle > a {
  color: inherit;
}

.p-card-footer > button {
  display: block;
  margin: auto;
}

.flex {
  display: flex;
  justify-content: space-evenly;
}

.flex > button {
  width: 45%;
}
</style>
