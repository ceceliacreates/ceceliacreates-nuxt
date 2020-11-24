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
              v-for="project of projects"
              :key="project.slug"
            >
              <NuxtLink
                :to="{ name: 'projects-slug', params: { slug: project.slug } }"
                class="project-link"
              >
                <v-card shaped class="project-card">
                  <v-img :src="project.img"></v-img>
                  <v-card-text>
                    <v-card-title>
                      {{ project.title }}
                    </v-card-title>
                    <v-card-subtitle>{{ project.description }}</v-card-subtitle>
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
    const projects = await $content("projects", params.slug)
      .only(["title", "description", "img", "link", "slug"])
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      projects,
    };
  },
};
</script>
<style>
.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
}
.project-card {
  height: 100%;
}
.project-link {
  text-decoration: none;
}
</style>
