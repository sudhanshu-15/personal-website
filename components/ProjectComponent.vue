<template>
    <v-container>
      <v-card>
        <v-card-media
          :src="project.image"
          height="300px"
          contain
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 text-xs-left">{{project.title}}</h3>
            <div class="text-xs-left">{{project.info}}</div>
            <div class="caption text-xs-left" style="font-style: italic;">{{project.dates}}</div>
            <span>
              <ul class="tags">
                <li v-for="tag in project.tags"><a href="#" class="tag">{{tag}}</a></li>
              </ul>
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat :href="project.github" target="#" v-if="project.github.length > 0">
            <i class="fab fa-github" style="font-size:1.75em;"></i>
          </v-btn>
          <v-btn flat color="teal" 
            :href="project.demo" 
            target="#" 
            v-if="project.demo.length > 0">Demo</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="show = !show">
            {{ show ? 'Less' : 'More' }}
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            <ul>
              <li class="list text-xs-left" v-for="item in project.contribution">{{item}}</li>
            </ul>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-container>
</template>

<script>
export default {
  props: ['project'],
  data: () => ({
    show: false
  })
}
</script>

<style scoped>
  .tags {
    list-style: none;
    margin: 0;
    overflow: hidden; 
    padding: 0;
  }

  .tags li {
    float: left; 
  }

  .tag {
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: darkslategrey;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
  }

  .tag::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  .tag::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
  }

  .tag:hover {
    background-color: teal;
    color: white;
  }

  .tag:hover::after {
    border-left-color: teal; 
  }
  .list {
    list-style-type: disc;
    position:relative;
    margin-left: 1.0em;
  }
</style>

