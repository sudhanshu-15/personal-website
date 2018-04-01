<template>
  <div>
    <h1>{{title}}</h1>
    <embed-vue :gistId="5457605"></embed-vue>
  </div>
</template>

<script>
import EmbedVue from '@/components/EmbedVue'
export default {
  props:['title'],
  components: {
    EmbedVue
  }
}
</script>

<style scoped>

</style>
