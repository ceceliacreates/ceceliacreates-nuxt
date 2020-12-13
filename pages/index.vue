<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container fluid fill-height id="main" style="max-height: 100vh">
        <v-row align="center" justify="center">
          <v-col class="text-left" cols="12" md="6">
            <h2 class="text-h2 font-weight-thin white--text mb-2">
              Cecelia Martinez
            </h2>
            <h3 class="subheading mx-2 cyan--text text--lighten-3">
              Code + Content
            </h3>
          </v-col>
          <v-col class="text-center" cols="12" md="6">
            <v-img
              :lazy-src="require('~/assets/images/CeceliaCreates.png')"
              max-width="250"
              class="mx-auto rounded-circle my-3"
              :src="require('~/assets/images/CeceliaCreates.png')"
            ></v-img>
            <h4 class="subheading white--text">
              <a
                href="http://www.twitter.com/ceceliacreates"
                target="blank"
                data-cy="twitter-link"
                ><v-icon class="ma-2" color="white" large
                  >mdi-twitter</v-icon
                ></a
              >
              <a
                href="http://www.github.com/ceceliacreates"
                target="blank"
                data-cy="github-link"
                ><v-icon class="ma-2" color="white" large>mdi-github</v-icon></a
              >
              <a
                href="https://www.linkedin.com/in/ceceliamartinez/"
                target="blank"
                data-cy="linkedin-link"
                ><v-icon class="ma-2" color="white" large
                  >mdi-linkedin</v-icon
                ></a
              >
              <a
                href="https://www.twitch.tv/ceceliacreates"
                target="blank"
                data-cy="twitch-link"
                ><v-icon class="ma-2" color="white" large>mdi-twitch</v-icon></a
              >
            </h4>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
a {
  text-decoration: none;
}
#main {
  background: linear-gradient(
    270deg,
    rgba(37, 44, 84, 1) 0%,
    rgba(73, 150, 168, 1) 85%,
    rgba(65, 159, 175, 0.944437149859944) 100%
  );
}
</style>
<script>
export default {
  head: {
    title: "Home page",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>
