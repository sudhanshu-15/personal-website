<template>
  <div class="container-background">
    <app-skill-component v-for="skill in skillDetails" :key="skill.id" :skill="skill"></app-skill-component>
     <iframe allowtransparency="true" frameborder="0" scrolling="no" seamless="seamless" src="http://colmdoyle.github.io/gh-activity/gh-activity.html?user=sudhanshu-15&type=user"
      width="300" height="300"></iframe>
    <back-to-top bottom="50px" right="50px" visibleOffset="200">
      <span class="grey darken-3" style="display: flex; opacity:0.6;">
        <v-icon x-large color="white">keyboard_arrow_up</v-icon>
      </span>
    </back-to-top>
  </div>
</template>

<script>
  import BackToTop from 'vue-backtotop';
  import SkillComponent from '@/components/SkillComponent.vue'
  import axios from 'axios'
  export default {
    components: {
      BackToTop,
      'appSkillComponent': SkillComponent
    },
    asyncData() {
      return axios.get('/skills.json')
        .then((res) => {
          return {
            skillDetails: res.data.skillDetails
          }
        })
        .catch((e) => {
          error({
            statusCode: 404,
            message: 'Post not found'
          });
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
