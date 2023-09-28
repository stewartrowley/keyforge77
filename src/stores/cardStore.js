import { defineStore } from 'pinia'
import cards from '../json/cards.json'

export const useCardStore = defineStore('card', {
  state () {
    return {
      cardsData: []
    };
  },
  getters: {
    getCardsData () {
      return this.cardsData;
    }
  },
  actions: {
    setCardsData () {
      this.cardsData = cards;
    }
  }
})
