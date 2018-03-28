<template>
  <v-app light>
    <v-navigation-drawer :clipped="clipped" v-model="drawer" fixed width="200" app>
      <v-card color="white" class="teal--text">
        <v-container fluid grid-list-xl>
          <v-layout row>
            <v-flex>
              <div>
                <div class="headline text-lg-left div-pointer" mx-auto @click="goToHome">Sudhanshu Siddh</div>
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
      <v-list>
        <v-list-tile>
          <v-list-tile-action v-for="social in socialLinks" :key="social.title">
            <a :href="social.url" target="#" style="text-decoration: none;">
              <i :class="[social.icon, social.color]" style="font-size:1.75em; padding:8px;"></i>
            </a>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="teal" dark v-if="title !== 'index'">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container v-scroll="onScroll">
        <transition name="fade" appear>
          <nuxt />
        </transition>
        <v-btn class="backtotop" fab @click="scrollToTop" color="teal" v-if="scrolled">
          <v-icon x-large color="white">keyboard_arrow_up</v-icon>
        </v-btn>
      </v-container>
    </v-content>
    <v-footer app inset>
      <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
          Handcrafted with
          <v-icon color="red">fas fa-heart</v-icon> using Vue Js; Powered by Nuxt, Vuetify, Axios, Firebase
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    scrollToTop: true,
    data () {
      return {
        clipped: false,
        drawer: true,
        permanent: true,
        scrolled: false,
        largerIcons: true,
        items: [{
          icon: 'person_pin',
          title: 'About',
          to: '/about',
          color: 'blue darken-4'
        },
        {
          icon: 'computer',
          title: 'Experience',
          to: '/experience',
          color: 'deep-purple darken-1'
        },
        {
          icon: 'widgets',
          title: 'Projects',
          to: '/projects',
          color: 'deep-orange lighten-1'
        },
        {
          icon: 'extension',
          title: 'Skills',
          to: '/skills',
          color: 'green darken-2'
        },
        {
          icon: 'school',
          title: 'Education',
          to: '/education',
          color: 'orange lighten-1'
        },
        {
          icon: 'description',
          title: 'Resume',
          to: '/resume',
          color: 'teal darken-1'
        }
        ],
        socialLinks: [{
          icon: 'fab fa-github',
          url: 'https://github.com/sudhanshu-15',
          title: 'github',
          color: 'social-github'
        },
        {
          icon: 'fab fa-linkedin-in',
          url: 'https://www.linkedin.com/in/sudhanshu15/',
          title: 'linkedin',
          color: 'social-lnked-in'
        },
        {
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/sudhanshu0203',
          title: 'twitter',
          color: 'social-twitter'
        }
        ]
      }
    },
    computed: {
      title () {
        var titleName = this.$route.name
        if (titleName && titleName !== 'index') return titleName.toUpperCase()
        else return ''
      }
    },
    methods: {
      goToHome () {
        this.$router.push('/')
      },
      onScroll (e) {
        this.scrolled = window.pageYOffset > 100
      },
      scrollToTop () {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>

<style scoped>
  .role-text {
    color: #6D4C41;
  }

  .div-pointer {
    cursor: pointer;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active below version 2.1.8 */

    {
    opacity: 0;
  }

  .social-lnked-in {
    color: #0077B5;
  }

  .social-twitter {
    color: #00aced;
  }

  .social-github {
    color: black;
  }

  .backtotop {
    bottom: 40px;
    right: 50px;
    position: fixed;
  }

</style>
