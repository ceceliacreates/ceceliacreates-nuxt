<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container fluid fill-height id="main">
        <NuxtLink to="/talks" class="nav-link">
          <v-button
            ><v-icon class="ma-2" large color="cyan darken-1"
              >mdi-arrow-left</v-icon
            ></v-button
          >
        </NuxtLink>
        <article class="ma-3 pa-3">
          <h1 class="text-h2">{{ talk.title }}</h1>
          <p class="text-subtitle-1">{{ talk.description }}</p>
          <a :href="talk.link">Video</a>
          <a :href="talk.slides">Slides</a>
          <img :src="talk.img" :alt="talk.alt" />

          <nuxt-content class="text-body-1 mx-3" :document="talk" />
        </article>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const talk = await $content("talks", params.slug).fetch();

    return { talk };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
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
