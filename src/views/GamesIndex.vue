<template>
  <div class="games">
    <h1>{{ message }}</h1>
    <div class="row">
    <div v-for="game in games" >
      
      <br>
      <a v-bind:href = "`/${game.name_url}/`"><img v-bind:src="game.game_url" width="400" height="200"></a>
    </div>
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
      message: "Choose below",
      games: []
    };
  },
  created: function() {
    this.indexGames();
  },
  methods: {
    indexGames: function() {
      axios.get("/api/games").then(response => {
        console.log("response.data");
        this.games = response.data;
      });
    }
  }
};
</script>