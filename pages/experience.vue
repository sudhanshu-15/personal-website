<template>
  <div>
    <section id="cd-timeline" class="cd-container">
      <app-experience-component v-for="experience in experienceDetail" :key="experience.id" :experience="experience"></app-experience-component>
    </section>
    <!-- cd-timeline -->
    <back-to-top bottom="50px" right="50px" visibleOffset="200">
      <span class="grey darken-3" style="display: flex; opacity:0.6;">
        <v-icon x-large color="white">keyboard_arrow_up</v-icon>
      </span>
    </back-to-top>
  </div>
</template>

<script>
  import ExperienceComponent from '@/components/ExperienceComponent.vue';
  import axios from 'axios';
  import BackToTop from 'vue-backtotop';
  export default {
    components: {
      'appExperienceComponent': ExperienceComponent,
      BackToTop
    },
    asyncData() {
      return axios.get('/experience.json')
        .then((res) => {
          return {
            experienceDetail: res.data.experienceDetail
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
