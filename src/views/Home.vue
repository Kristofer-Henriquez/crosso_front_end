<template>
  <div class="home">
    <!-- <h1>{{ message }}</h1> -->
    
    <!-- <div v-for="universal in universals"> -->
      <div class="col-12">
											<header class="first major">
												<h2>Get your fundamentals first!</h2>
												<p> <strong></strong> </p>
											</header>
										</div>
                    <input type="text" v-model="searchTerm" list="titles">
                    <datalist id="titles">
                      <option v-for="universal in universals">{{universal.title}}</option>
                      <br>
                    </datalist>
                    <hr>
                    <hr>
                    <br>
                    <div class="col-4 col-12-medium">
											<section>
												<header v-for="universal in filterBy(universals, searchTerm, 'title')">
													<h3>{{universal.title}}</h3>
													<p>{{universal.body}}</p>
												</header>
											</section>
										</div>
    <!-- <div v-for="universal in filterBy(universals, searchTerm, 'title')"> -->
      <!-- {{universal.title}} -->
      <!-- {{universal.body}} -->
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