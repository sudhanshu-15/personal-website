<template>
    <div>
        <v-btn color="blue darken-3 white--text" :href="url" target="#" style="position: relative; margin-bottom: 10px; left: 40%;">
        Download
        <v-icon right color="white">cloud_download</v-icon>
        </v-btn>
        <pdf :src="src" @error="errorLoading"></pdf>
        <v-snackbar 
          :timeout="timeout" 
          :top="top" 
          v-model="snackbar">
          Unable to load pdf, please download instead!
          <v-btn flat color="teal" @click.native="snackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template>
<script>
  import pdf from 'vue-pdf'
  var loading = pdf.createLoadingTask('https://www.dl.dropboxusercontent.com/s/t5ev5wz80vio9ix/Sudhanshu_March12018.pdf');
  export default {
    components: {
      pdf
    },
    data () {
      return {
        src: loading,
        url: 'https://www.dl.dropboxusercontent.com/s/t5ev5wz80vio9ix/Sudhanshu_March12018.pdf',
        snackbar: false,
        timeout: 6000,
        top: true
      }
    },
    methods: {
      errorLoading () {
        console.log("Error loading pdf");
        this.snackbar = true;
      }
    }
  }
</script>
