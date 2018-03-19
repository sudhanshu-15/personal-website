<template>
<div class="layoutBackground">
  <v-layout column justify-center align-center>
    <v-flex>
      <div class="text-xs-center">
      </div>
        <v-card>
          <v-card-media class="white--text" src="https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/index_image.jpg?alt=media&token=0aa2cad7-a502-454c-8427-baa99c60cd83" height="400px"></v-card-media>
          <v-card-title class="display-1"><span>An <strong>Unorthodox</strong> Developer</span></v-card-title>
          <v-card-title class="headline">A Dreamer</v-card-title>
          <v-card-text>
            <p class="title">Passionate about bringing a change through<br> 
              <em>mobile and pervasive technologies.</em></p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
          </v-card-actions>
        </v-card>
    </v-flex>
  </v-layout>
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

