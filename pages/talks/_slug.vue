<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container fluid id="main">
        <v-row>
          <v-col cols="12">
            <NuxtLink to="/talks" class="nav-link">
              <v-button
                ><v-icon
                  class="ma-2"
                  large
                  color="cyan darken-1"
                  data-cy="back-button"
                  >mdi-arrow-left</v-icon
                ></v-button
              >
            </NuxtLink>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-3 pa-3" cols="12">
            <h1 class="text-h2">{{ talk.title }}</h1>
            <p class="text-subtitle-1">{{ talk.description }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-if="talk.embed" cols="12" md="6">
            <iframe
              width="460"
              height="258"
              data-cy="talk-video"
              :src="`https://www.youtube.com/embed/${talk.embed}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
          <v-col cols="12" md="6">
            <ul>
              <li v-if="talk.link">
                <v-icon class="ma-2" large color="cyan darken-1"
                  >mdi-video</v-icon
                ><a
                  :href="talk.link"
                  class="text-decoration-none  black--text"
                  target="blank"
                  >Video</a
                >
              </li>
              <li v-if="talk.slides">
                <v-icon class="ma-2" large color="cyan darken-1"
                  >mdi-presentation</v-icon
                ><a
                  :href="talk.slides"
                  class="text-decoration-none black--text"
                  target="blank"
                  >Slides</a
                >
              </li>
            </ul>
          </v-col>
        </v-row>
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

<style scoped>
ul {
  list-style: none;
}
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
