export default {
  components: true,
  modules: ["@nuxt/content"],
  buildModules: [
    // Simple usage
    "@nuxtjs/vuetify"
  ],
  target: "static",
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content: "viewport-fit=cover, width=device-width"
    }
  ]
};
