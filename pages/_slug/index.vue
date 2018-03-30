<template>
    <div>
        <app-blog-component :title="title"></app-blog-component>
        <app-blog-component :title="slug"></app-blog-component>
    </div>
</template>

<script>
import BlogComponent from '@/components/BlogComponent'
import axios from 'axios'
export default {
  components: {
      'appBlogComponent':BlogComponent
  },
  asyncData(){
      return axios.get('/details.json')
      .then((res) => {
        return {title: res.data.aboutDetails[0].quote}
      })
      .catch((e) => {
        this.$nuxt.error({ statusCode: 404, message: 'Post not found' })
      })
  },
  data() {
      return {
          slug: this.$route.params.slug
      }
  }
}
</script>

<style scoped>

</style>
