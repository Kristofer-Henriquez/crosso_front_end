<template>
  <div class="games">
    <h1>{{ message }}</h1>
    <div v-for="game in games">
      <h2>{{ game.title }}</h2>
      <br>
      <img v-bind:src="game.game_url" width="400" height="200">
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