<template>
  <div class="wedding">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="video-wrap">
          <video autoplay controls :src="baseurl+play.url" />
        </div>
      </v-flex>
      <v-flex xs12 sm4>
        <v-card dark color="primary">
          <v-card-text>
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <a :class="play.url==item.url?'active':''" @click="playit(item)">{{ item.title }}</a>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head () {
    return {
      title: 'wedding'
    }
  },
  data () {
    return {
      play: {},
      baseurl: 'https://ipfs.io/ipfs/QmZniwfBm414KoUqUeG9RVTQDJUgoAEm3REohev9EeDe7N',
      list: [{
        url: '/VTS_01_1.mp4',
        title: '出发，接美丽新娘'
      },
      {
        url: '/VTS_01_2.mp4',
        title: '出发，顺利接走美丽新娘'
      },
      {
        url: '/VTS_01_3.mp4',
        title: '出发，到帅气新郎家'
      },
      {
        url: '/VTS_01_4.mp4',
        title: '出发，交换新婚戒指'
      },
      {
        url: '/VTS_01_5.mp4',
        title: '出发，有意思的致辞'
      },
      {
        url: '/VTS_01_6.mp4',
        title: '出发，痛快喝一场'
      }
      ]
    }
  },
  created () {
    this.play = this.list[0]
  },
  methods: {
    playit (item:any) {
      this.play = item
    }
  }
})
</script>

<style scoped>
    .wedding{
        background: #303030;
    }
    .video-wrap {
        width: 100%;
        min-width: 215px;
        background: #303030;
    }

    .video-wrap video {
        width: 100%;
    }

    ul li {
        padding: 13px;
    }

    ul li a {
        color: #ddd;
        font-size: 14px;
    }
    ul li a.active {
        color: rgba(35, 236, 236, 0.822);
    }
</style>
