<template>
  <v-container grid-list-md text-xs-center class="container-background">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 v-for="project in projectDetails" :key="project.id">
        <app-project-component :project=project></app-project-component>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ProjectComponent from '@/components/ProjectComponent.vue'
import axios from 'axios'
export default {
    components: {
      'appProjectComponent': ProjectComponent
    },
    asyncData () {
      return axios.get('/projects.json')
        .then((res) => {
          return {
            projectDetails: res.data.projectDetails
          }
        })
        .catch((e) => {
          this.$nuxt.error({
            statusCode: 404,
            message: 'Post not found'
          })
        })
    },
    head: {
      title: 'Projects | ssiddh.me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projects Page of Sudhanshu Siddh'
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
