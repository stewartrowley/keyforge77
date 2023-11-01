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
        case 'action':
          return "Action"
        case 'creature':
          return "Creature"
        case 'artifact':
          return "Artifact"
        case 'upgrade':
          return "Upgrade"
      }
    }
  }
})
