<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <input type="text" v-model="searchTerm" list="titles">
    <datalist id="titles">
      <option v-for="universal in universals">{{universal.title}}</option>
    </datalist>
    <!-- <div v-for="universal in universals"> -->
    <div v-for="universal in filterBy(universals, searchTerm, 'title')">
      {{universal.title}}
      {{universal.body}}
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from 'axios';
import Vue2Filters from 'vue2-filters';

export default {
  data: function() {
    return {
      message: "Crosso",
      universals: [],
      searchTerm: ""
    };
  },
  created: function() {
    this.indexUniversals();
  },
  methods: {
    indexUniversals: function() {
      axios.get("/api/universals").then(response => {
        console.log("response.data");
        this.universals = response.data;
      });
    }
  },
  mixins: [Vue2Filters.mixin]
};
</script>