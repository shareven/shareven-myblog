<template>
  <v-layout>
    <v-flex text-xs-center>
      <ul class="list-video">
        <li>第<input type="number" v-model="br">集 <a target="_blank" :href="'http://79tv.com/play/index3379-0-'+(br-1)+'.html'">博人传</a></li>
        <li>第<input type="number" v-model="dj">集 <a target="_blank" :href="'http://79tv.com/play/index13636-0-'+(dj-1)+'.html'">刀剑神域3</a></li>
        <li>第<input type="number" v-model="zf">集 <a target="_blank" :href="'http://79tv.com/play/index15214-0-'+(zf-1)+'.html'">知否知否</a></li>
        <li>第<input type="number" v-model="nq">集 <a target="_blank" :href="'http://79tv.com/play/index15711-0-'+(nq-1)+'.html'">怒晴湘西</a></li>
        <li>第<input type="number" v-model="dl">集 <a target="_blank" :href="'http://79tv.com/play/index6526-0-'+(dl-1)+'.html'">斗罗大陆</a></li>
      </ul>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data(){
    return {
        br:1,
        dj:1,
        zf:1,
        nq:1,
        dl:1,
    }
  }
}
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

