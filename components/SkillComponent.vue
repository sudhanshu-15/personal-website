<template>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap align-center>
      <v-flex style="margin-top: 10px; width: 30px;" class="text-xs-center headline">
          <v-avatar tile size="90">
            <img class="logo" :src="skill.logo"/>
        </v-avatar>
        <p>
            {{skill.skillName}}
        </p>
      </v-flex>
      <v-flex>
        <v-progress-circular :size="80" :width="15" :rotate="-90" :value="value" :class="skill.color">
          {{value}}
        </v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    props: ['skill'],
    data () {
      return {
        interval: {},
        value: 0
      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value >= this.skill.value) {
          return
        }
        this.value += 5
      }, 225)
    }
  }
</script>
<style scoped>
  .android {
    color: #A4C639;
  }

  .java {
    color: #F89820;
  }

  .nativescript {
    color: #2d46ff;
  }

  .vuejs {
    color: #42b883;
  }

  .javascript {
    color: #f7df1e;
  }

  .typescript {
    color: #007ACC;
  }

  .coldfusion {
    color: #000e27;
  }

  .html5 {
    color: #e34f26;
  }

  .css3 {
    color: #3B5998;
  }

  .xml {
    color: black;
  }

  .sqlserver {
    color: #ae0018;
  }

  .mysql {
    color: #00758f;
  }

  .mobileapp {
    color: #26A69A;
  }

  .softdesign {
    color: #42A5F5;
  }

  .designpattern {
    color: #5C6BC0;
  }

  .firebase {
      color: #F57C00;
  }

  .logo {
      width: auto;
      height: 60px;
  }

</style>
