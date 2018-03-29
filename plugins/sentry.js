import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Raven.config('https://a0b82c4ef3514d6cae50a8dab9b519b5@sentry.io/664442')
  .addPlugin(RavenVue, Vue)
  .install()
