<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const { user } = useAuth();
</script>

<template>
  <div>Hello there</div>
</template>

<style scoped></style>
