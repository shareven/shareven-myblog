<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to shareven blog</v-card-title>
        <v-card-text>
          <p>当你想在你的代码中找到一个错误时，这很难；</p>
          
          <p>当你认为你的代码是不会有错误时，这就更难了。</p>
          <div class="text-xs-right">
            <em><small>&mdash; Steve McConnell</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://www.zhihu.com/people/dadiandi/activities"
            target="_blank">我的知乎</a>
          <br>
          <a
            href="https://github.com/shareven"
            target="_blank">shareven GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="primary"
            flat
            nuxt
            to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
