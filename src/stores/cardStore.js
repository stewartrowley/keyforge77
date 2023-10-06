import { defineStore } from 'pinia'
import cards from '../json/cards.json'

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
      this.cards = cards;
      console.log(cards);
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
