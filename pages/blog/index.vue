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
              v-for="article of articles"
              :key="article.slug"
            >
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="blog-link"
              >
                <v-card shaped class="blog-card">
                  <v-img :src="article.img"></v-img>
                  <v-card-text>
                    <v-card-title>
                      {{ article.title }}
                    </v-card-title>
                    <v-card-subtitle>{{ article.description }}</v-card-subtitle>
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
    const articles = await $content("articles", params.slug)
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>
<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.blog-card {
  height: 100%;
}
.blog-link {
  text-decoration: none;
}
</style>
