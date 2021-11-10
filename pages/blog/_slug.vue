<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container fluid id="main">
        <v-row>
          <v-col cols="12">
            <NuxtLink to="/blog" class="nav-link">
              <v-button
                ><v-icon class="ma-2" large color="cyan darken-1"
                  >mdi-arrow-left</v-icon
                ></v-button
              >
            </NuxtLink>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="ma-3 pa-3" cols="12">
            <h1 class="text-h2">{{ article.title }}</h1>
            <p class="text-subtitle-1">{{ article.description }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <img
              :src="require(`~/assets/images/${article.img}`)"
              :alt="article.alt"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <nuxt-content class="text-body-1 mx-3" :document="article" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  head: {
    title: "CeceliaCreates.com",
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
  max-width: 75%;
  display: block;
  margin: 0 auto;
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
