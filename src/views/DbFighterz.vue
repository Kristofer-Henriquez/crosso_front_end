<template>
  <div class="DbFighterz">
    <img v-bind:src="game.game_url" width="400" height="200">
  <br>
  <br>
  <br>
    <div class="row">
      <div class="column">
    <h2><a v-bind:href="`/dbfighterz/dlc/`"> DLC </a></h2>
      </div>
      <div class="column">
    <h2><a v-bind:href="`/dbfighterz/stages/`"> stages </a></h2>
      </div>
      <div class="column">
    <h2><a v-bind:href="`/dbfighterz/patch_notes/`"> Patch Notes </a></h2>
      </div>
    <div class="column">
    <h2><a v-bind:href="`/dbfighterz/characters/`"> Characters </a></h2>
    </div>
    </div>
    <br>
    <br>
    <hr>
    <br>
    <h1><a v-bind:href="`/dbfighterz/random/`"> {{random}} </a></h1>
    <hr>
    <br>
    <h1>{{ message }}</h1>
    <br>
    <br>
    <br>
    <h2><a v-bind:href="`/dbfighterz/combo`">Combos</a></h2>
    <div v-for="combo in combos">
    
    
    <br>
      <video-embed v-bind:src=combo.combo_video></video-embed>
      <br>
    
    <br>
      {{ combo.notation }}
    </div>
    <br>
    <br>
    <br>
    <h2><a v-bind:href="`/dbfighterz/tutorial`"> Tutorials </a> </h2>
    <div v-for="tutorial in tutorials">
      <h3>{{tutorial.title}}</h3>
      <br>
      {{tutorial.body}}
    </div>
    <br>
    <br>
    <br>
    <h2> <a v-bind:href="`/dbfighterz/tip`">Tips </a></h2>
    <div v-for="tip in tips">
      {{tip.tips_list}}
    </div>
    <br>
    <br>
    <br>
    <h2> <a v-bind:href="`/dbfighterz/tier_list`">Tier List </a></h2>
    <div v-for="tier_list in tier_lists">
    
      <img v-bind:src="tier_list.list" width="1200" height="700">
    </div>
  </div>
</template>

<style>
.column {
  float: inline-start;
  width: 1;
  padding: 5px;
  margin-right: auto;
  margin-left: auto;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
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
      tier_lists: [],
      random: "Click here for more content"
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