<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const { user } = useAuth();
</script>

<template>
  <DashboardWrapper title="Hello">
    <DisplayLoader />
  </DashboardWrapper>
</template>

<style scoped></style>
