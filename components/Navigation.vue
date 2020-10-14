<template>
    <v-app-bar
      absolute
      app
      color="white"
      dark
      src="https://source.unsplash.com/E0AHdsENmDg/1920x1310"
    >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
       
        <v-icon class="ma-2">mdi-code-tags</v-icon>
       
        <v-icon class="ma-2">mdi-heart</v-icon>
       
        <v-icon class="ma-2">mdi-pencil</v-icon>
   <v-spacer></v-spacer>
   <v-btn text class="white--text">PROJECTS</v-btn>
   <v-btn text class="white--text">BLOG</v-btn>
   <v-btn text class="white--text">TALKS</v-btn>
  </v-app-bar>
</template>