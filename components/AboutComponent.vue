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
  props:['aboutDetail']
}
</script>

<style scoped>
/* @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic); */
/* blockquote{
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
}*/

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


