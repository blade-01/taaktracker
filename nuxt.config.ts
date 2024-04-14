// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s | Taaktracker",
      title: "Taaktracker",
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: "Your Task Tracker, Your Rules 🚀"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: "https://conversar.vercel.app"
        },
        {
          property: "og:title",
          content: "Conversar | Your Task Tracker, Your Rules 🚀"
        },
        {
          property: "og:description",
          content: "Your Task Tracker, Your Rules 🚀"
        },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/bladencove/image/upload/v1711707623/site_logos/logo_chlj5u.svg"
        },
        {
          property: "twitter:card",
          content: "summary_large_image"
        },
        {
          property: "twitter:url",
          content: "https://conversar.vercel.app"
        },
        {
          property: "twitter:title",
          content: "Conversar | Your Task Tracker, Your Rules 🚀"
        },
        {
          property: "twitter:description",
          content: "Your Task Tracker, Your Rules 🚀"
        },
        {
          property: "twitter:image",
          content:
            "https://res.cloudinary.com/bladencove/image/upload/v1711707623/site_logos/logo_chlj5u.svg"
        },
        { name: "theme-color", content: "#1e1e2e" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        }
      ],
      link: [{ rel: "icon", href: "/favicon.ico" }]
    }
  },
  devtools: { enabled: true },
  css: [
    "primevue/resources/themes/tailwind-light/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css"
  ],
  plugins: [
    "~/plugins/directives.client.ts",
    "~/plugins/vue-tel-input.ts",
    "~/plugins/primevue.ts"
  ],
  build: {
    transpile: ["primevue"]
  },
  imports: {
    dirs: ["store"]
  },
  /**
   * Environment variables
   */
  runtimeConfig: {
    public: {
      apiKey: process.env.SUPABASE_KEY,
      baseURL: process.env.SUPABASE_URL
    }
  },
  /**
   * Modules configuration
   */
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "nuxt-headlessui",
    "@tailvue/nuxt",
    "@vee-validate/nuxt",
    "dayjs-nuxt",
    "vue3-carousel-nuxt",
    "@nuxt/devtools",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase"
  ],
  /**
   * Pinia configuration
   */
  pinia: {
    storesDirs: ["./store/**"]
    // autoImports: ["defineStore", "acceptHMRUpdate"]
  },
  /**
   * Internalization configuration
   */
  i18n: {
    vueI18n: "./i18n.config.ts"
  },
  /**
   * VeeValidate Configuration
   */
  veeValidate: {
    autoImports: true
  },
  /**
   * Carousel Configuration
   */
  carousel: {
    prefix: "Nuxt"
  },
  /**
   * Dayjs Configuration
   */
  dayjs: {
    locales: ["en", "fr"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "America/New_York"
  },
  /**
   * Nuxt Color Mode Configuration
   */
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light"
  },
  /**
   * External Image Provider Configuration
   */
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/bladencove/image/upload/RC"
    }
  },
  /**
   * Supabase Configuration
   */
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/",
      include: undefined,
      exclude: [],
      cookieRedirect: false
    }
  }
});
