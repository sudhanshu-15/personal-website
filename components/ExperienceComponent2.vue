<template>
  <v-timeline>
    <v-timeline-item
      v-for="(experience, i) in experienceDetail"
      :key="i"
      color="red lighten-2"
      small
    >
      <template v-slot:opposite>
        <span class="headline font-weight-bold green--text" v-text="experience.dates"></span>
      </template>
      <v-flex>
        <v-hover>
          <v-card
            color="orange lighten-1"
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
          >
            <v-card-title class="headline">{{experience.job}}</v-card-title>
            <v-card-text class="white text--primary">
              <v-list>
                <v-list-tile-content
                  v-for="detail in experience.description"
                  :key="detail.id"
                >* {{detail.text}}</v-list-tile-content>
              </v-list>
              <v-item v-for="tech in experience.technology" :key="tech.id">
                <v-chip small color="teal" text-color="white" disabled>
                  <v-avatar>
                    <v-icon>donut_small</v-icon>
                  </v-avatar>
                  {{tech.techName}}
                </v-chip>
              </v-item>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-flex>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: ["experienceDetail"]
};
</script>