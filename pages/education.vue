<template>
  <div>
    <section id="cd-timeline" class="cd-container">
      <app-education-component v-for="education in educationDetail" :key="education.id" :education="education"></app-education-component>
    </section>
    <!-- cd-timeline -->
  </div>
</template>

<script>
  import EducationComponent from '@/components/EducationComponent.vue'
import axios from 'axios'
export default {
    components: {
      'appEducationComponent': EducationComponent
    },
    asyncData () {
      return axios.get('/education.json')
        .then((res) => {
          return {
            educationDetail: res.data.educationDetail
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
      title: 'Education | ssiddh.me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Education Page of Sudhanshu Siddh'
        }
      ]
    }
  }
</script>

<style scoped>
  html,
  body {
    background-color: #222c32;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  .cd-container {
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
    background: #FAFAFA;
    padding: 0 10%;
    border-radius: 2px;
  }

  .cd-container::after {
    content: '';
    display: table;
    clear: both;
  }

  /* -------------------------------- 
 Main components 
 -------------------------------- */

  #cd-timeline {
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  #cd-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: #CFD8DC;
  }

  @media only screen and (min-width: 1170px) {
    #cd-timeline {
      margin-top: 3em;
      margin-bottom: 3em;
    }
    #cd-timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }

</style>
