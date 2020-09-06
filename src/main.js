import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import Embed from 'v-video-embed';
import LazyYoutubeVideo from 'vue-lazy-youtube-video';
import VueYoutubePlayer from 'vue-youtube-player';
import VueYouTubeEmbed from 'vue-youtube-embed';

Vue.use(VueYouTubeEmbed);


Vue.component('LazyYoutubeVideo', LazyYoutubeVideo);

// global register
Vue.use(Embed);


axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
Vue.config.productionTip = false;

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
