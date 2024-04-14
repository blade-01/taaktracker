<script setup lang="ts">
// @ts-ignore
definePageMeta({
  layout: "auth",
});

// @ts-ignore
useHead({
  title: "Sign In",
});

// @ts-ignore
const { signInWithGoogle, signInWithEmail, isLoading } = useAuth();

function handleSubmit(values: any) {
  if (values.email) {
    signInWithEmail(values);
  }
}
</script>

<template>
  <div
    class="flex flex-col items-center justify-center text-center absolute inset-y-0 inset-x-0 w-[90%] md:w-[340px] mx-auto"
  >
    <div>
      <!-- <img src="~/assets/svg/logo.svg" alt="logo" v-if="$colorMode?.value === 'dark'" />
      <img src="~/assets/svg/logo.svg" alt="logo" v-if="$colorMode?.value === 'light'" /> -->
      <img src="~/assets/svg/logo.svg" alt="logo" />
    </div>
    <h1
      class="text-2xl lg:text-3xl font-bold text-text-primary/80 dark:text-text-secondary/80 my-2.5"
    >
      Welcome to Taaktracker
    </h1>
    <p class="text-sm text-text-primary/[0.64] dark:text-text-secondary/[0.64]">
      Your Task Tracker, Your Rules 🚀
    </p>
    <div class="flex flex-col gap-5 w-full mt-8">
      <UiBtn
        prepend-icon="mdi:google"
        size="sm"
        class="w-full !bg-btn-primary !text-white"
        @click="signInWithGoogle"
        :is-loading="isLoading"
      >
        Sign In With Google
      </UiBtn>
    </div>
    <!-- <hr
      class="border-t border-t-bg-secondary/[0.2] dark:border-t-bg-primary/[0.2] my-5 w-[80%] mx-auto"
    />
    <Form v-slot="{ values, errors }" class="w-full" @submit="handleSubmit">
      <UiInputField name="email" type="email" placeholder="Email" class="text-center" />
      <UiBtn
        size="sm"
        class="w-full !bg-input-primary dark:!bg-input-secondary border border-border-primary dark:border-border-secondary font-light"
        label="Continue"
        :is-loading="isLoading"
      />
    </Form> -->
  </div>
</template>

<style scope></style>
