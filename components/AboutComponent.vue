<template>
  <v-container align-center justify-center wrap fluid>
            <blockquote v-if="aboutDetail.quote.length > 0">
                {{aboutDetail.quote}}
            </blockquote>
            <p class="text-xs-center headline">
                {{aboutDetail.text}}
            </p>
  </v-container>
</template>

<script>
export default {
  props:['aboutDetail']
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
blockquote{
  font-size: 1.4em;
  width:80%;
  margin:50px auto;
  font-family:Open Sans;
  font-style:italic;
  color: #555555;
  padding:1.2em 30px 1.2em 75px;
  border-left:8px solid #78C0A8 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

blockquote::before{
  font-family:Arial;
  content: "\201C";
  color:#78C0A8;
  font-size:4em;
  position: absolute;
  left: 10px;
  top:-10px;
}

blockquote::after{
  content: '';
}

blockquote span{
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}
.container-background {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/personal-website-e3515.appspot.com/o/gplaypattern_big.png?alt=media&token=da7cb917-3ccc-4f3a-8dc6-136dcbb23bfb');
    background-repeat: repeat;
}
</style>


