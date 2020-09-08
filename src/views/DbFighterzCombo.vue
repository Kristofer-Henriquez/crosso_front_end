<template>
  <div class="DbFighterzCombo">
    <!-- <h1>{{ message }}</h1> -->
    <h1>Create a new combo video </h1>
    <h1>using your youtube channel!</h1>

    <form v-on:submit.prevent="submit()">
      
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Paste the Youtube Video URL!</label> 
        <input type="text" class="form-control" v-model="combo_video">
      </div>
      <div class="form-group">
        <label>Notation:</label>
        <input type="text" class="form-control" v-model="notation">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Create a new combo video using your youtube channel!",
      combo_video: "",
      notation: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
        combo_video: this.combo_video,
        notation: this.notation,
      };
      axios.post("/api/combos", params).then(response => {
        console.log(response);
        this.$router.push("/dbfighterz");
      }).catch(errors => {
        console.log(errors.response);
        this.errors = errors.response;
      });
    }
  }
};
</script>