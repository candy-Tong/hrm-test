<script setup lang="ts">
import { ref } from 'vue';


const count = ref(12);
</script>

<template>
  <h1>Base Demo</h1>
  <h1>{{ count }}</h1>
</template>

<style scoped></style>
