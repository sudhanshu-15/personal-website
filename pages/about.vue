<template>
  <div class="container-background">
      <app-about-component v-for="aboutDetail in aboutDetails" :aboutDetail=aboutDetail :key="aboutDetail.id"></app-about-component>
  </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue'
import axios from 'axios'
export default {
  components: {
    'appAboutComponent': AboutComponent
  },
  data () {
    return {
    }
  },
  asyncData () {
    return axios.get('/details.json')
      .then((res) => {
        return {aboutDetails: res.data.aboutDetails}
      })
      .catch((e) => {
        this.$nuxt.error({ statusCode: 404, message: 'Post not found' })
      })
  },
  head: {
    title: 'About page | ssiddh.me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'About Page of Sudhanshu Siddh'
      }
    ]
  }
}
</script>

<style scoped>
.container-background {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/gplaypattern_big.png?alt=media&token=da7cb917-3ccc-4f3a-8dc6-136dcbb23bfb');
    background-repeat: repeat;
}
</style>
