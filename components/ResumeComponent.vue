<template>
    <div>
        <v-btn color="blue darken-3 white--text" :href="url" target="#" style="position: relative; margin-bottom: 10px; left: 40%;">
        Download
        <v-icon right color="white">cloud_download</v-icon>
        </v-btn>
        <pdf :src="url"></pdf>
    </div>
</template>
<script>
  import pdf from 'vue-pdf'
  export default {
    components: {
      pdf
    },
    data() {
      return {
        url: 'https://www.dl.dropboxusercontent.com/s/t5ev5wz80vio9ix/Sudhanshu_March12018.pdf'
      }
    }
  }

</script>
