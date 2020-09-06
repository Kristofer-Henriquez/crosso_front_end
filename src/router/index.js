import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import GamesIndex from '../views/GamesIndex.vue';
import DbFighterz from '../views/DbFighterz.vue';
import DbFighterzCharacters from '../views/DbFighterzCharacters.vue';
import DbFighterzCharactersShow from '../views/DbFighterzCharactersShow.vue';
import DbFighterzCombo from '../views/DbFighterzCombo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'GamesIndex',
    component: GamesIndex
  },
  {
    path: '/dbfighterz',
    name: 'dbfighterz',
    component: DbFighterz
  },
  {
    path: '/dbfighterz/characters',
    name: 'dbfighterzcharacters',
    component: DbFighterzCharacters
  },
  {
    path: '/dbfighterz/combo',
    name: 'dbfighterzcombo',
    component: DbFighterzCombo
  },
  {
    path: '/dbfighterz/characters/:id',
    name: 'DbFighterzCharactersShow',
    component: DbFighterzCharactersShow
  },
  { path: "/signup", 
    name: "signup", 
    component: Signup 
  },
  { path: "/login", 
    name: "login", 
    component: Login },
  { path: "/logout", 
    name: "logout", 
    component: Logout },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
