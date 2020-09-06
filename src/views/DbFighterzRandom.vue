<template>
<div>
  <div class="DbFighterzRandom">
    <h1>{{ message }}</h1>
    {{response}}
   </div>
  <div id="twitch-embed"></div>
  <div id="twitch-embed-2"></div>
  <div id="twitch-embed-3"></div>
  <div id="twitch-embed-4"></div>
  <div id="twitch-embed-5"></div>

  <h1>{{message_2}}</h1>

  <div v-for="combo in combos.slice(0, 5)">
      <video-embed v-bind:src=combo.combo_video></video-embed>
      {{ combo.notation }}
    </div>

</div>
</template>

<style>
</style>

<script>
import axios from "axios";


export default {
  data: function() {
    return {
      message: "Twitch functionality",
      message_2: "See User's content below",
      combos: []
    };
  },
  created: function() {
    this.indexCombos();
  },
  mounted: function() {
    this.fetchAPIData();
    new Twitch.Embed("twitch-embed", {
      width: 800,
      height: 400,
      channel: "dekillsage",
      autoplay: false,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com 
      parent: ["embed.example.com", "othersite.example.com"]
    });
    new Twitch.Embed("twitch-embed-2", {
      width: 800,
      height: 400,
      channel: "Kalevi9",
      autoplay: false,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com 
      parent: ["embed.example.com", "othersite.example.com"]
    });
    new Twitch.Embed("twitch-embed-3", {
      width: 800,
      height: 400,
      channel: "Enfant_Perdu_Easyman",
      autoplay: false,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com 
      parent: ["embed.example.com", "othersite.example.com"]
    });
    new Twitch.Embed("twitch-embed-4", {
      width: 800,
      height: 400,
      channel: "Tarilariran",
      autoplay: false,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com 
      parent: ["embed.example.com", "othersite.example.com"]
    });
    new Twitch.Embed("twitch-embed-5", {
      width: 800,
      height: 400,
      channel: "cloud_805",
      autoplay: false,
      // only needed if your site is also embedded on embed.example.com and othersite.example.com 
      parent: ["embed.example.com", "othersite.example.com"]
    });
  },
  methods: {
    fetchAPIData() {
      axios.get(`https://api.twitch.tv/helix/streams?game_id=33214`).then(response => {
        console.log(response.data);
        this.result = response.data;
      });
    },
    indexCombos: function() {
      axios.get("api/combos/all").then(response => {
        console.log("response.data");
        this.combos = response.data;
      });
    },
  }
};
</script>