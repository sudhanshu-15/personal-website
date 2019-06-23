<template>
    <div>
        <app-blog-component :blogDetail="blogDetail"></app-blog-component>
        <app-blog-component :blogDetail="blogDetail"></app-blog-component>
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
        slug: this.$route.params.slug,
        blogDetail: {
            quote: this.$route.params.slug,
            by: 'Sudhanshu Siddh',
            text: 'This is a temporary paragraph, blah blah, more text more text',
            gistId: 5457644,
            gistFileName: 'example-file2.html',
            image: 'https://www.what-dog.net/Images/faces2/scroll001.jpg',
            imageComment: 'Cute doggo'
        }
    }
  }
}
</script>

<style scoped>

</style>
