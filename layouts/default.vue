<script setup lang="ts">
const nav = ref<boolean>(false);

const toggleSidebar = () => {
  nav.value = !nav.value;
};

provide("collapsible", {
  nav,
  toggleSidebar,
});
</script>

<template>
  <div class="relative overflow-x-clip">
    <NavigationSidebar :nav="nav" />
    <main class="sidebar-wrapper" :class="{ 'mainbar-opened': nav }">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
.sidebar-wrapper {
  @apply bg-bg-primary dark:bg-bg-secondary h-screen overflow-y-auto w-full transition-[margin-left] ease-out duration-500
  /* MARGIN */
  md:ml-[var(--sidebar-width-md)] lg:ml-[var(--sidebar-width-lg)] 2xl:ml-[var(--sidebar-width-2xl)]
  /* WIDTH */
  md:w-[calc(100%-var(--sidebar-width-md))] lg:w-[calc(100%-var(--sidebar-width-lg))] 2xl:w-[calc(100%-var(--sidebar-width-2xl))];
}
.mainbar-opened {
  @apply ml-[var(--sidebar-width)] 
  md:ml-0 md:w-full;
}
</style>
