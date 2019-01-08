<template>
 <div class="home">
    <v-layout  justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center  hidden-xs1" >
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">{{$t('home.title')}}</v-card-title>
        <v-card-text>
          <p>{{$t('home.p1')}}</p>
  
          <p>{{$t('home.p2')}}</p>
          <div class="text-xs-right">
            <em><small>&mdash; Steve McConnell</small></em>
          </div>
          <hr class="my-3">
          <div class="text-center">
  
            <nuxt-link to="wedding">婚礼记录</nuxt-link>
            <br>
            <br>
            <a href="https://www.zhihu.com/people/dadiandi/activities" target="_blank">{{$t('home.zhihu')}}</a>
            <br>
            <br>
            <a href="https://github.com/shareven" target="_blank">shareven GitHub</a>
           
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
 </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  
  export default {
    components: {
      Logo,
      VuetifyLogo
    },
  
  }
</script>
<style scoped>
.text-center{
  text-align: center;
}
@media screen and (max-width: 786px) {
  .hidden-xs{
    display: none;
  }
}
</style>
