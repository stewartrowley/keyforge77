<template>
  <div>
    <DeckTable />
    <div>
      <div class="deck-layout-container" v-for="(deck, index) in getDecks" :key="index">
        <div class="deck-layout-deck" @click="this.handleShow(deck)">
          <div class="deck-layout-title">
            <div class="deck-layout-select-icon">
              <div
                class="chevron-icon-down"
                v-if="
                  deck.isSelected === false ||
                  deck.isSelected === undefined
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </div>
              <div class="chevron-icon-up" v-if="deck.isSelected">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 512 512">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  />
                </svg>
              </div>
            </div>
            <h1 class="deck-layout-name">{{ deckStore.decks[index].name }}</h1>
          </div>
          <div class="deck-layout-stats">
            <p>Power: {{ deckStore.decks[index].power }}</p>
            <p>Aember: {{ deckStore.decks[index].aember }}</p>
            <p>Creature Count: {{ deckStore.decks[index].creatureCount }}</p>
          </div>
          <div class="deck-layout-icons">
            <div
              class="deck-icon-box"
              v-for="(house, index) in deckStore.decks[index].houses"
              :key="index"
              :style="this.handleBackground(house)"
            >
              <img class="deck-icon" :src="this.getHouseIcon(house)" />
              <h3>{{ house }}</h3>
            </div>
          </div>
        </div>
        <CardLayout v-if="deck.isSelected" :cards="deck.cardData" />
      </div>
    </div>
  </div>
</template>
<script>
import { useDeckStore } from '../stores/deckStore'
import { useCardStore } from '../stores/cardStore'
import { useSetStore } from '../stores/setStore'
import CardLayout from './CardLayout.vue'
import DeckTable from './DeckTable.vue'

export default {
  data() {
    return {
      cardData: null,
      isOpen: false,
      decks: []
    }
  },
  computed: {
    getDecks () {
      this.deckStore.decks.forEach((deck) => {
        deck.isSelected = false
      })
      return this.deckStore.decks;
    }
  },
  // mounted() {
  //   this.deckStore.decks.forEach((deck) => {
  //     deck.isSelected = false
  //   })
  // },
  methods: {
    // getCards() {
    //   this.decks = []
    //   console.log(this.deckStore.decks);
    //   this.deckStore.decks.forEach((deck) => {
    //     console.log(deck);
    //     this.decks.push(deck.cardData)
    //   })
    //   console.log(this.decks);
    //   return this.decks
    // },
    getHouseIcon(house) {
      let houseIcon
      this.setStore.houses.forEach((element) => {
        if (element.house === house) {
          houseIcon = element.houseIcon
        }
      })
      return houseIcon
    },
    handleShow(deck) {
      deck.isSelected = deck.isSelected ? false : true;
    },
    handleBackground(item) {
      console.log(item)
      let houseColor
      this.setStore.houses.forEach((element) => {
        if (element.house === item) {
          houseColor = element.houseColor
        }
      })
      return {
        'background-color': houseColor,
        height: '100%'
      }
    }
  },
  setup() {
    const deckStore = useDeckStore()
    const cardStore = useCardStore()
    const setStore = useSetStore()
    return {
      deckStore,
      cardStore,
      setStore
    }
  },
  components: { CardLayout, DeckTable }
}
</script>
<style scoped>
.deck-layout-container {
    padding: 2rem 2rem;
}
.chevron-icon-up {
  fill: var(--mars);
  rotate: 180deg;
}
.chevron-icon-down {
  fill: var(--sanctum);
}
.deck-layout-deck {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 5px;
  height: 60px;
  align-items: center;
  cursor: pointer;
  background: hsla(0, 0%, 75%, 1);
  background: linear-gradient(90deg, hsla(0, 0%, 75%, 1) 0%, hsla(218, 32%, 80%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(0, 0%, 75%, 1) 0%, hsla(218, 32%, 80%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(0, 0%, 75%, 1) 0%, hsla(218, 32%, 80%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C0C0C0", endColorstr="#BBC7DC", GradientType=1 );
  /* border: 1px solid black; */
}
.deck-layout-select-icon {
    padding: 1rem;
}
.deck-layout-title {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.deck-layout-stats {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.deck-layout-icons {
    height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.deck-icon-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: small;
}
.deck-icon {
  width: 40px;
  height: 40px;
}
.deck-layout-chevron {
  color: red;
}
.deck-layout-name {
  font-size: 15px;
}
</style>
