<template>
  <div class="DbFighterzCharacterShow">
    
    <h2> {{character.name}} </h2>
    <img v-bind:src="character.default_image">
    <img v-bind:src="character.command_list">
    <img v-bind:src="character.frame_data">
    <br>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "",
      character: []
    };
  },
  created: function() {
    this.showCharacter();
  },
  methods: {
    showCharacter: function() {
      console.log("individual character");

      axios.get(`/api/characters/${this.$route.params.id}`).then(response => {
        console.log(response.data);
        this.character = response.data;
      });
    }
  }
};
</script>