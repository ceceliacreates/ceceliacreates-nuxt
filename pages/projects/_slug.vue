<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container fluid fill-height id="main">
        <NuxtLink to="/projects" class="nav-link">
          <v-button
            ><v-icon class="ma-2" large color="cyan darken-1"
              >mdi-arrow-left</v-icon
            ></v-button
          >
        </NuxtLink>
        <article class="ma-3 pa-3">
          <h1 class="text-h2">{{ project.title }}</h1>
          <p class="text-subtitle-1">{{ project.description }}</p>
          <a :href="project.link" target="blank">GitHub Repository</a>
        </article>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("projects", params.slug).fetch();

    return { project };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  head: {
    title: "Home page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>

<style>
.nav-link {
  text-decoration: none;
}
img {
  max-width: 800px;
  max-height: 600px;
}
h2 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
  margin-top: 30px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
p {
  margin-bottom: 20px;
}
</style>
