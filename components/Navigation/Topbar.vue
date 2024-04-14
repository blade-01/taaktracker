<script setup lang="ts">
import UiBtn from "~/components/Ui/Btn/index.vue";
import useTheme from "~/composables/useTheme";
defineEmits(["toggleSidebar"]);
const { setTheme } = useTheme();
const { tooltipStyle } = usePvStyle();
const { toggleSidebar, nav } = inject("collapsible") as {
  nav: boolean;
  toggleSidebar: () => void;
};
const sidebarToggler = ref<InstanceType<typeof UiBtn> | null>(null);
useShortcut({
  toggle() {
    sidebarToggler.value?.triggerClick();
  },
});
const { user } = useAuth();
</script>

<template>
  <div
    class="flex items-center main sticky top-0 w-full h-[var(--sidebar-height)] z-50 shadow-sm bg-bg-primary dark:bg-bg-secondary border-b border-b-bg-secondary/[0.2] dark:border-b-bg-primary/[0.2]"
  >
    <div class="p-4 w-full">
      <div class="hidden md:block absolute top-5 -left-[15px] z-50">
        <UiBtn
          v-tooltip="{
            value: `${nav ? 'collapse [' : 'expand ['}`,
            pt: tooltipStyle,
          }"
          ref="sidebarToggler"
          class="!py-0 !bg-transparent border border-gray-300 rounded-full !h-6 !w-6 !pl-5 !pr-2 !flex !justify-center !items-center"
          @click="toggleSidebar"
        >
          <Icon
            :name="nav ? 'mdi:chevron-right' : 'mdi:chevron-left'"
            class="!flex"
            size="22"
          ></Icon>
        </UiBtn>
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-2 md:hidden">
          <UiBtn
            v-tooltip="{
              value: `${!nav ? 'collapse [' : 'expand ['}`,
              pt: tooltipStyle,
            }"
            ref="sidebarToggler"
            class="!p-0 !bg-transparent"
            @click="toggleSidebar"
          >
            <Icon name="mdi:menu" class="text-3xl font-bold cursor-pointer"></Icon>
          </UiBtn>
          <p>Welcome, Blade!</p>
        </div>
        <div>&nbsp;</div>
        <div class="flex items-center gap-4">
          <Icon
            :name="
              $colorMode.value === 'dark' ? 'mdi:weather-night' : 'mdi:weather-sunny'
            "
            size="23"
            class="cursor-pointer"
            @click="setTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
          />
          <div class="flex gap-2 items-center cursor-pointer">
            <img
              :src="user?.user_metadata?.avatar_url"
              alt="illustration_01"
              class="w-10 h-10 border-2 border-primary rounded-full"
            />
            <p class="hidden md:flex">{{ user?.user_metadata?.full_name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
