import { defineStore } from 'pinia'
import decks from '../json/decks.json'

export const useDeckStore = defineStore('deck', {
  state () {
    return {
      decks: []
    };
  },
  getters: {
    getDecks () {
      return this.decks;
    },
  },
  actions: {
    setDecks () {
      this.decks = decks;
      console.log(decks);
    },
  }
})
