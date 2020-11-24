<template>
  <v-app>
    <Navigation />
    <v-main>
      <div>
        <v-container>
          <v-row wrap>
            <v-col
              cols="12"
              sm="6"
              lg="4"
              v-for="talk of talks"
              :key="talk.slug"
            >
              <NuxtLink
                :to="{ name: 'talks-slug', params: { slug: talk.slug } }"
                class="talk-link"
              >
                <v-card shaped class="talk-card">
                  <v-img :src="talk.img"></v-img>
                  <v-card-text>
                    <v-card-title>
                      {{ talk.title }}
                    </v-card-title>
                    <v-card-subtitle>{{ talk.description }}</v-card-subtitle>
                  </v-card-text>
                </v-card>
              </NuxtLink>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const talks = await $content("talks", params.slug)
      .only(["title", "description", "img", "link", "slides", "embed", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      talks,
    };
  },
};
</script>
<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.talk-card {
  height: 100%;
}
.talk-link {
  text-decoration: none;
}
</style>
