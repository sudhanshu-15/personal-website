<template>
  <div>
    <section id="cd-timeline" class="cd-container">
      <app-experience-component :experienceDetail="experienceDetail"></app-experience-component>
    </section>
    <!-- cd-timeline -->
  </div>
</template>

<script>
//import ExperienceComponent from '@/components/ExperienceComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent2.vue'
import axios from 'axios'
export default {
    components: {
      'appExperienceComponent': ExperienceComponent
    },
    asyncData () {
      return axios.get('/experience.json')
        .then((res) => {
          return {
            experienceDetail: res.data.experienceDetail
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
      title: 'Experience | ssiddh.me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience Page of Sudhanshu Siddh'
        }
      ]
    }
  }
</script>

<style scoped>
</style>
