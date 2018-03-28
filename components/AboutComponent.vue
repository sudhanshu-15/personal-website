<template>
  <v-container>
            <blockquote v-if="aboutDetail.quote.length > 0">
                {{aboutDetail.quote}}
                <span v-if="aboutDetail.by.length > 0">{{aboutDetail.by}}</span>
            </blockquote>
            <v-flex>
              <p class="text-md-left headline">
                {{aboutDetail.text}}
              </p>
            </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ['aboutDetail']
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

.container-background {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/gplaypattern_big.png?alt=media&token=da7cb917-3ccc-4f3a-8dc6-136dcbb23bfb');
    background-repeat: repeat;
}
</style>


