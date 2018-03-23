<template>
  <div class="container-background">
      <app-about-component v-for="aboutDetail in aboutDetails" :aboutDetail=aboutDetail :key="aboutDetail.id"></app-about-component>
      <back-to-top bottom="50px" right="50px" visibleOffset="200">
          <span class="grey darken-3" style="display: flex; opacity:0.6;"><v-icon x-large color="white">keyboard_arrow_up</v-icon></span>
      </back-to-top>
  </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue';
import axios from 'axios';
import BackToTop from 'vue-backtotop';
export default {
  components: {
      'appAboutComponent': AboutComponent,
      BackToTop
  },
  data() {
      return {
      }
  },
  asyncData () {
      return axios.get('/details.json')
      .then((res) => {
          return {aboutDetails: res.data.aboutDetails}
      })
      .catch((e) => {
          error({ statusCode: 404, message: 'Post not found' });
      })
  }
}
</script>

<style scoped>
.container-background {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/gplaypattern_big.png?alt=media&token=da7cb917-3ccc-4f3a-8dc6-136dcbb23bfb');
    background-repeat: repeat;
}
</style>
