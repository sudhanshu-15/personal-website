<template>
<div class="layoutBackground">
  <v-container fill-height>
  <v-layout column justify-center align-center>
    <v-flex>
      <div class="text-xs-center">
      </div>
        <v-card>
          <v-card-media class="white--text" src="https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/main-pic.png?alt=media&token=e025356d-d624-4b85-af60-6ec3abedcc1b" height="400px"></v-card-media>
          <v-card-title class="display-1"><span><strong>Mobile</strong> Developer</span></v-card-title>
          <v-card-title class="headline">Android &#38; Flutter enthusiast</v-card-title>
          <v-card-text>
            <p class="title">Passionate about bringing a change through<br> 
              <em>mobile and pervasive technologies.</em></p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat nuxt to="/about">About Me</v-btn>
          </v-card-actions>
        </v-card>
    </v-flex>
  </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.layoutBackground {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/2144.jpg?alt=media&token=867d189d-e890-485c-8102-0bc22f72f0ce');
  background-position: left center;
  background-size: 100%;
}
</style>

