export default {
  components: true,
  modules: ["@nuxt/content"],
  buildModules: [
    // Simple usage
    "@nuxtjs/vuetify",
  ],
  target: "static",
  meta: [
    {
      name: "viewport",
      content:
        "viewport-fit=cover, width=device-width, initial-scale=1, minium-scale=1, maximum-scale=1, user-scalable=no",
    },
  ],
};
