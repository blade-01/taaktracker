<script setup lang="ts">
const { links, toggleDropdown } = useSidebarUtils();
defineProps<{ nav: boolean }>();
const { signOut } = useAuth();
</script>

<template>
  <div class="sidebar" :class="{ 'active-sidebar': nav }">
    <div>
      <div class="sidebar-header">
        <NuxtLink to="/" class="flex items-center gap-1">
          <img src="~/assets/svg/logo.svg" alt="logo" height="30" width="30" />
          <span class="font-bold text-2xl">Taaktracker</span>
        </NuxtLink>
      </div>
      <div class="sidebar-content">
        <ul class="flex flex-col gap-y-2">
          <li v-for="(link, index) in links" :key="index">
            <span v-if="!link.sub">
              <RouterLink
                :to="`${link.route}`"
                active-class="sidebar-active"
                class="sidebar-item"
              >
                <Icon v-if="link.icon" :name="`mdi:${link.icon}`" width="25" />
                <span class="font-light">{{ link.name }}</span>
              </RouterLink>
            </span>
            <span v-else>
              <span
                class="flex items-center justify-between sidebar-item mb-2"
                @click="toggleDropdown(link)"
              >
                <span class="flex items-center gap-3">
                  <Icon v-if="link.icon" :name="`mdi:${link.icon}`" width="25" />
                  <span class="font-light">{{ link.name }}</span>
                </span>
                <Icon
                  name="mdi:chevron-down"
                  width="18"
                  :class="
                    link?.show ? 'sidebar--active-chevron' : 'sidebar--inactive-chevron'
                  "
                ></Icon>
              </span>
              <span
                class="flex flex-col"
                :class="[
                  link?.show ? 'sidebar--active-collapse' : 'sidebar--inactive-collapse',
                ]"
              >
                <span v-for="(sub, index) in link.sub" :key="index">
                  <span class="block pl-[37px] pb-2">
                    <RouterLink
                      :to="`${sub.route}`"
                      active-class="sidebar-active"
                      class="sidebar-item"
                    >
                      <span class="font-light">{{ sub.name }}</span>
                    </RouterLink>
                  </span>
                </span>
              </span>
            </span>
          </li>
        </ul>
        <div
          @click="signOut"
          class="flex items-center gap-2 cursor-pointer mt-5 absolute bottom-5"
        >
          <div class="sidebar--logout-icon">
            <Icon name="mdi:logout" width="20" />
          </div>
          <p class="text-xs text-style">Log out</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  @apply shadow-sm z-40 fixed top-0 md:left-0 -left-full transition-[left] duration-500 ease-out border-r border-r-bg-secondary/[0.2] dark:border-r-bg-primary/[0.2]
  bg-sidebar-primary 
  /* DARK MODE */
  dark:bg-sidebar-secondary
  /* WIDTH */
  w-[var(--sidebar-width)] md:w-[var(--sidebar-width-md)] lg:w-[var(--sidebar-width-lg)] 2xl:w-[var(--sidebar-width-2xl)];
}

.sidebar-header {
  @apply sticky top-0 w-full h-[var(--sidebar-height)] shadow-sm p-4 flex justify-between items-center border-b border-b-bg-secondary/[0.2] dark:border-b-bg-primary/[0.2]
  bg-sidebar-primary 
  /* DARK MODE */
  dark:bg-sidebar-secondary;
}

.sidebar-content {
  @apply h-[calc(100vh-var(--sidebar-height))] py-6 px-4 overflow-y-auto;
}

.active-sidebar {
  @apply left-0 w-[var(--sidebar-width)] md:w-[var(--sidebar-width-md)] lg:w-[var(--sidebar-width-lg)] 2xl:w-[var(--sidebar-width-2xl)] md:-left-full;
}

.sidebar-item {
  @apply p-3 transition-all ease-in-out duration-300 cursor-pointer flex items-center gap-2
  hover:bg-link-primary 
  dark:hover:bg-link-secondary
  hover:rounded-md;
}
.sidebar-active {
  @apply bg-link-primary dark:bg-link-secondary rounded-md text-text-primary dark:text-text-secondary;
}

.sidebar--active-chevron {
  @apply transition-all ease-in duration-300 transform rotate-180;
}

.sidebar--inactive-chevron {
  @apply transition-all ease-out duration-300 transform rotate-0;
}

.sidebar--active-collapse {
  @apply transition-[max-height] max-h-[5000px] duration-200 ease-in;
}

.sidebar--inactive-collapse {
  @apply transition-[max-height] max-h-0 duration-300 ease-out overflow-hidden;
}

.sidebar--logout-icon {
  @apply w-[50px] h-[50px] rounded-full bg-link-primary dark:bg-link-secondary flex justify-center items-center text-style;
}
</style>
