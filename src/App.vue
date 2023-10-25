<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCardStore } from './stores/cardStore';
import { useDeckStore } from './stores/deckStore';
import { useSetStore } from './stores/setStore';
import {usePodStore} from './stores/podStore';
import { useHouseStore } from './stores/houseStore';
const deckStore = useDeckStore();
const cardStore = useCardStore();
const setStore = useSetStore();
const  podStore = usePodStore();
const houseStore = useHouseStore();
cardStore.setCards();
deckStore.setDecks();
deckStore.getDecksStats();
setStore.setHouses();
podStore.setPods();
houseStore.setHouses();

</script>

<template>
  <header>
    <div class="nav-container">
      <div class="nav-logo-box">
        <img class="nav-logo" src="./assets/keyforge-cards/keychart-logo.png" />
        <h1 class="nav-logo-text">KeyChart</h1>
      </div>
      <div class="nav-icons">
        <div class="nav-icon-row" v-for="item, index in setStore.getHouses" :key="index" :style="this.handleBackground(item.houseColor)" @click="this.handleRoute(item.house)">
          <img class="nav-icon-house" :src="item.houseIcon" />
        </div>
      </div>
      <nav class="nav-box">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/decks">Decks</RouterLink>
        <RouterLink class="nav-link" to="/pods">Pods</RouterLink>
        <RouterLink class="nav-link" to="/cards">Cards</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script>

export default {
  methods: {
    handleBackground(color) {
      return {
        'background-color': color
      }
    },
    handleRoute(house) {
      house.toLowerCase();
      this.$router.push(house)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.logo-banner {
  width: 100%;
  height: 100%;
}
.nav-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 1rem;
}
.nav-box {
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  /* justify-content: space-between; */
}
.nav-logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-start;
  /* justify-content: space-evenly; */
}
.nav-logo-text {
  padding-left: 1rem;
  font-family: 'Dancing Script', cursive;
  font-size: 60px;
  font-weight: 700;
  color: #fed73b;
}
.nav-logo {
  width: 20%;
}
.nav-link {
  color: #FFFFFF;
  padding: 1rem 1rem;
}
.nav-link:hover {
  background-color: #FFFFFF;
  color: navy;
}
.nav-icons {
  display: flex;
  flex-direction: row;
}
.nav-icon-house {
  width: 70%;
}
.nav-icon-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

</style>
