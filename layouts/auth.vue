<script setup lang="ts">
const { setTheme } = useTheme();
</script>

<template>
  <div class="flex flex-col justify-center gap-2.5 text-center px-4">
    <div class="fixed top-5 right-5 lg:top-10 lg:right-10 z-50">
      <Icon
        :name="$colorMode.value === 'dark' ? 'mdi:weather-night' : 'mdi:weather-sunny'"
        size="23"
        class="cursor-pointer"
        @click="setTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
      />
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
