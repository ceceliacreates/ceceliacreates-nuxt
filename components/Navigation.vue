<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      disable-resize-watcher
      color="cyan darken-2"
    >
      <v-list>
        <v-list-item-group>
          <v-list-item key="home">
            <v-list-item-content>
              <NuxtLink to="/" class="nav-link">
                <v-btn text class="white--text">HOME</v-btn></NuxtLink
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item key="projects">
            <v-list-item-content>
              <NuxtLink to="/projects" class="nav-link"
                ><v-btn text class="white--text">PROJECTS</v-btn></NuxtLink
              ></v-list-item-content
            ></v-list-item
          >
          <v-list-item key="blog">
            <v-list-item-content>
              <NuxtLink to="/blog" class="nav-link"
                ><v-btn text class="white--text">BLOG</v-btn></NuxtLink
              ></v-list-item-content
            ></v-list-item
          >
          <v-list-item key="talks">
            <v-list-item-content>
              <NuxtLink to="/talks" class="nav-link"
                ><v-btn text class="white--text">TALKS</v-btn></NuxtLink
              ></v-list-item-content
            ></v-list-item
          >
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="white"
      dark
      src="https://source.unsplash.com/E0AHdsENmDg/1920x1310"
      app
      absolute
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <NuxtLink to="/" class="nav-link">
        <v-icon class="ma-2">mdi-code-tags</v-icon>

        <v-icon class="ma-2">mdi-heart</v-icon>

        <v-icon class="ma-2">mdi-pencil</v-icon>
      </NuxtLink>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <NuxtLink to="/projects" class="nav-link hidden-sm-and-down"
        ><v-btn text class="white--text hidden-sm-and-down"
          >PROJECTS</v-btn
        ></NuxtLink
      >
      <NuxtLink to="/blog" class="nav-link hidden-sm-and-down"
        ><v-btn text class="white--text hidden-sm-and-down"
          >BLOG</v-btn
        ></NuxtLink
      >
      <NuxtLink to="/talks" class="nav-link hidden-sm-and-down"
        ><v-btn text class="white--text hidden-sm-and-down"
          >TALKS</v-btn
        ></NuxtLink
      >
    </v-app-bar>
  </span>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style scoped>
.nav-link {
  text-decoration: none;
}
</style>
