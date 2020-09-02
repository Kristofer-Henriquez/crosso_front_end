<template>
  <div class="DbFighterzCharacters">
    <h1>{{ message }}</h1>
    <div v-for="character in characters">
      <a v-bind:href="`/dbfighterz/characters/${character.id}`">{{ character.name }}</a>
      <br>
      <img v-bind:src="character.default_image" width="200" height="80">
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
      message: "Choose a character!",
      characters: []
    };
  },
  created: function() {
    this.indexGames();
  },
  methods: {
    indexGames: function() {
      axios.get("/api/characters").then(response => {
        console.log("response.data");
        this.characters = response.data;
      });
    }
  }
};
</script>