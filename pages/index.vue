<template>
 <v-app>
 <v-app-bar
      absolute
      app
      color="white"
      dark
      src="https://source.unsplash.com/E0AHdsENmDg/1920x1310"
      scroll-target="#scrolling-techniques-2"
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

  <v-main>
   <template>
 <v-container fluid fill-height id="main">
  <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-left"
        cols="12"
        md="6"
      >
        <h2 class="text-h2 font-weight-thin white--text mb-2">
          Cecelia Martinez
        </h2>
        <h3 class="subheading mx-2 cyan--text text--lighten-3">
          Code + Content
        </h3>
      </v-col>
       <v-col
        class="text-center"
        cols="12"
        md="6"
      >
        <v-img
  lazy-src="https://raw.githubusercontent.com/ceceliacreates/gatsby-ceceliacreates/main/src/images/CeceliaCreates.png"
  max-width="250"
  class="mx-auto rounded-circle my-3"
  src="https://raw.githubusercontent.com/ceceliacreates/gatsby-ceceliacreates/main/src/images/CeceliaCreates.png"
></v-img>
        <h4 class="subheading">
          Social icons
        </h4>
      </v-col>
    </v-row>
 </v-container>
   </template>
  </v-main>


 <v-footer app>Footer</v-footer>
</v-app>
</template>

<style scoped>
#main {
  background: linear-gradient(90deg, rgba(59,111,148,1) 0%, rgba(82,174,196,1) 36%, rgba(125,212,227,0.944437149859944) 100%);
  width: 100%;
  height: 100%;
  max-height: 100vh;
}
</style>