import { defineStore } from 'pinia'
import items from '../../test.json'

export const useCardStore = defineStore('card', {
  state () {
    return {
      cards: []
    };
  },
  getters: {
    getCards () {
      return this.cards;
    },
  },
  actions: {
    setCards () {
      this.cards = items.cards;
      console.log(items.cards);
    },
    getCardType (key) {
      switch (key) {
        case 1:
          return "Action"
        case 2:
          return "Creature"
        case 3:
          return "Artifact"
        case 4:
          return "Upgrade"
      }
    }
  }
})
