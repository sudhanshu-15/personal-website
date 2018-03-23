<template>
  <v-container grid-list-md text-xs-center class="container-background">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 v-for="project in projectDetails" :key="project.id">
        <app-project-component :project=project></app-project-component>
      </v-flex>
    </v-layout>
    <back-to-top bottom="50px" right="50px" visibleOffset="200">
      <span class="grey darken-3" style="display: flex; opacity:0.6;">
        <v-icon x-large color="white">keyboard_arrow_up</v-icon>
      </span>
    </back-to-top>
  </v-container>
</template>

<script>
  import ProjectComponent from '@/components/ProjectComponent.vue';
  import axios from 'axios';
  import BackToTop from 'vue-backtotop';
  export default {
    components: {
      'appProjectComponent': ProjectComponent,
      BackToTop
    },
    asyncData() {
      return axios.get('/projects.json')
        .then((res) => {
          return {
            projectDetails: res.data.projectDetails
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
