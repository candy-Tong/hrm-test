<script setup lang="ts">
import { useCount } from './useCount';
import rawText from './useCount?raw';
console.log(rawText);
const { count } = useCount();
</script>

<template>
  <h1>ExternalImport Demo</h1>
  <h1>{{ count }}</h1>
</template>

<style scoped></style>
