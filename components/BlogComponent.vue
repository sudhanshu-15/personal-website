<template>
  <v-container>
    <blockquote v-if="blogDetail.quote.length > 0">
      {{blogDetail.quote}}
      <span v-if="blogDetail.by.length > 0">{{blogDetail.by}}</span>
    </blockquote>
    <embed-vue :gistId="blogDetail.gistId" :showSpinner="true" :fileName="blogDetail.gistFileName"></embed-vue>
    <v-container text-xs-center>
      <v-flex>
        <img :src="blogDetail.image" class="image elevation-10"/>
      </v-flex>
    </v-container>
    <v-flex>
      <p class="text-md-left headline">
        {{blogDetail.text}}
      </p>
    </v-flex>
  </v-container>
</template>

<script>
import EmbedVue from '@/components/EmbedVue'
export default {
  props:['blogDetail'],
  components: {
    EmbedVue
  }
}
</script>

<style scoped>
blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}
blockquote {
	border-left: 5px solid #009688;
	color: #000000;
	font-size: 150%;
	font-weight: 400;
	margin: 20px 0;
	padding-left: 1.5rem;
}
blockquote * {
  font-size: inherit;
  line-height: inherit;
}
.image {
  border-radius: 10%;
  block-size: auto;
  max-width: 350px;
  max-height: 350px;
}
</style>
