<template>
  <v-layout>
    <v-flex text-xs-center>
      <ul class="list-video">
        <li>第<input v-model="br" type="number">集 <a target="_blank" :href="'http://79tv.com/play/index3379-0-'+(br-1)+'.html'">博人传</a></li>
        <li>第<input v-model="dj" type="number">集 <a target="_blank" :href="'http://79tv.com/play/index13636-0-'+(dj-1)+'.html'">刀剑神域3</a></li>
        <li>第<input v-model="zf" type="number">集 <a target="_blank" :href="'http://79tv.com/play/index15214-0-'+(zf-1)+'.html'">知否知否</a></li>
        <li>第<input v-model="nq" type="number">集 <a target="_blank" :href="'http://79tv.com/play/index15711-0-'+(nq-1)+'.html'">怒晴湘西</a></li>
        <li>第<input v-model="dl" type="number">集 <a target="_blank" :href="'http://79tv.com/play/index6526-0-'+(dl-1)+'.html'">斗罗大陆</a></li>
      </ul>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head () {
    return {
      title: 'videos'
    }
  },
  data () {
    return {
      br: 1,
      dj: 1,
      zf: 1,
      nq: 1,
      dl: 1
    }
  }
})
</script>

<style scoped>
 .list-video{
   list-style: none;
 }
  .list-video li{
    margin: 25px;
 }
  .list-video li input{
   margin: 0 5px;
   width: 50px;
   text-align: center;
   background: #888;
 }
  .list-video li a{
   color: #dddddd;

 }
</style>
