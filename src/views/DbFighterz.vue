<template>
  <div class="DbFighterz">
    <img v-bind:src="game.game_url" width="400" height="200">
    <h2><a v-bind:href="`/dbfighterz/dlc/`"> DLC </a></h2>
    <h2><a v-bind:href="`/dbfighterz/stages/`"> stages </a></h2>
    <h2><a v-bind:href="`/dbfighterz/patch_notes/`"> Patch Notes </a></h2>
    <h2><a v-bind:href="`/dbfighterz/characters/`"> Characters </a></h2>
    <br>
    <br>
    <h1>{{ message }}</h1>
    <h2><a v-bind:href="`/dbfighterz/combo`">Combos</a></h2>
    <div v-for="combo in combos">
      <video-embed v-bind:src=combo.combo_video></video-embed>
      {{ combo.notation }}
    </div>
    <h2><a v-bind:href="`/dbfighterz/tutorial`"> Tutorials </a> </h2>
    <div v-for="tutorial in tutorials">
      <h3>{{tutorial.title}}</h3>
      <br>
      {{tutorial.body}}
    </div>
    <h2> <a v-bind:href="`/dbfighterz/tip`">Tips </a></h2>
    <div v-for="tip in tips">
      {{tip.tips_list}}
    </div>
    <h2> <a v-bind:href="`/dbfighterz/tier_list`">Tier List </a></h2>
    <div v-for="tier_list in tier_lists">
    
      <img v-bind:src="tier_list.list" width="800" height="400">
    </div>
  </div>
</template>

<style>

</style>

<script>
import axios from "axios";
import Embed from 'v-video-embed';
import LazyYoutubeVideo from 'vue-lazy-youtube-video';
import VueYoutubePlayer from 'vue-youtube-player';
import VueYouTubeEmbed from 'vue-youtube-embed';

export default {
  data: function() {
    return {
      message: "See your content below",
      game: [],
      combos: {},
      tips: [],
      tutorials: [],
      tier_lists: []
    };
  },
  created: function() {
    this.indexGames();
    this.indexTierLists();
    this.indexCombos();
    this.indexTips();
    this.indexTutorials();

  },
  methods: {
    indexGames: function() {
      axios.get("/api/games/2").then(response => {
        console.log("response.data");
        this.game = response.data;
      });
    },
    indexCombos: function() {
      axios.get("api/combos").then(response => {
        console.log("response.data");
        this.combos = response.data;
      });
    },
    indexTips: function() {
      axios.get("api/tips").then(response => {
        console.log("response.data");
        this.tips = response.data;
      });
    },
    indexTutorials: function() {
      axios.get("api/tutorials").then(response => {
        console.log("response.data");
        this.tutorials = response.data;
      });
    },
    indexTierLists: function() {
      axios.get("api/tier_lists").then(response => {
        console.log("response.data");
        this.tier_lists = response.data;
      });
    },
  },
};
</script>