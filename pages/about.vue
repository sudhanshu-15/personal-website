<template>
  <div class="container-background">
      <app-about-component v-for="aboutDetail in aboutDetails" :aboutDetail=aboutDetail :key="aboutDetail.id"></app-about-component>
  </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue';
import axios from 'axios';
export default {
  components: {
      'appAboutComponent': AboutComponent 
  },
  data() {
      return {
      }
  },
  asyncData () {
      return axios.get('https://personal-website-e3515.firebaseio.com/details.json')
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
