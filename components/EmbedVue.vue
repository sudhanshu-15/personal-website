<template>
  <code :data-gist-id="gistId" :data-gist-hide-line-numbers="hideLineNumbers" :data-gist-hide-footer="hideFooter" :data-gist-file="fileName" :data-gist-show-spinner="showSpinner" class="gist"></code>
</template>
<script>
export default {
  props:{
      gistId: {
          type: Number,
          required: true
      },
      hideLineNumbers: {
          type: Boolean,
          default: false
      },
      hideFooter: {
          type: Boolean,
          default: false
      },
      fileName: {
          type: String
      },
      showSpinner: {
          type: Boolean,
          default: false
      }
  },
  head: {
      script: [
          { src : 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'},
          { src : 'https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.7.1/gist-embed.min.js'}
      ]
  }
}
</script>
<style scoped>
    .gist {
        white-space: normal;
    }
    .gist::before {
        content: '';
    }
    .gist::after {
        content: '';
    }
</style>