<template>
  <v-app light>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" fixed width="200" app>
      <v-card color="white" class="teal--text">
        <v-container fluid grid-list-xl>
          <v-layout row>
            <v-flex>
              <div>
                <div class="headline text-lg-left" mx-auto>Sudhanshu Siddh</div>
                <div class="subheading role-text" mx-auto>Mobile Application Developer</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-divider></v-divider>
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon" large :color="item.color"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>

    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped" color="teal" dark v-if="title !== 'index'">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title === 'index' ? '' : title.toUpperCase() "></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>Made with
        <v-icon color="red">fas fa-heart</v-icon> using Vue Js</span>
      <v-spacer></v-spacer>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        permanent: true,
        largerIcons: true,
        items: [{
            icon: 'person_pin',
            title: 'About',
            to: '/',
            color: 'blue darken-4'
          },
          {
            icon: 'computer',
            title: 'Experience',
            to: '/inspire',
            color: 'deep-purple darken-1'
          },
          {
            icon: 'widgets',
            title: 'Projects',
            to: '/inspire',
            color: 'deep-orange lighten-1'
          },
          {
            icon: 'extension',
            title: 'Skills',
            to: '/inspire',
            color: 'green darken-2'
          },
          {
            icon: 'school',
            title: 'Education',
            to: '/inspire',
            color: 'orange lighten-1'
          },
          {
            icon: 'description',
            title: 'Resume',
            to: '/inspire',
            color: 'teal darken-1'
          },
        ],
      }
    },
    computed: {
      title() {
        return this.$route.name;
      }
    }
  }

</script>

<style scoped>
  .role-text {
    color: #6D4C41;
  }

</style>
