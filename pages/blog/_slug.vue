<template>
<v-app>
   <Navigation />
   <v-main>
     <v-container fluid fill-height id="main">
  <article class="ma-3 pa-3">
    <h1 class="text-h2">{{ article.title }}</h1>
    <p class="text-subtitle-1">{{ article.description }}</p>
    <img
      :src="article.img"
      :alt="article.alt"
    />
    <p class="font-italic">Article last updated: {{ formatDate(article.updatedAt) }}</p>

    <nuxt-content class="text-body-1 mx-3" :document="article" />
  </article>
     </v-container>
   </v-main>
</v-app>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
  }
</script>

<style>
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