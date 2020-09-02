<template>
  <div class="DbFighterz">
    <img v-bind:src="game.game_url" width="400" height="200">
    <h2> DLC </h2>
    <h2> Patch Notes </h2>
    <h2> Stages </h2>
    <h2> Characters </h2>
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "See your content below",
      game: []
    };
  },
  created: function() {
    this.indexGames();

  },
  methods: {
    indexGames: function() {
      axios.get("/api/games/2").then(response => {
        console.log("response.data");
        this.game = response.data;
      });
    }
  }
};
</script>