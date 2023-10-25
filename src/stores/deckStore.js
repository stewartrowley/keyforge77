import { defineStore } from 'pinia'
import decks from '../json/decks.json'
import { useCardStore } from './cardStore';

export const useDeckStore = defineStore('deck', {
  state () {
    return {
      decks: [],
    };
  },
  getters: {
    getDecks () {
      return this.decks;
    },
  },
  actions: {
    getDecksData () {
      this.decks = []
      console.log(this.deckStore.decks);
      this.deckStore.decks.forEach((deck) => {
        console.log(deck);
        this.decks.push(deck.cardData)
      })
      console.log(this.decks);
      return this.decks
    },
    getDecksStats() {
      this.assignCardsToDecks();
      this.calcDecksPower();
      this.calcDecksAember();
      this.calcCreatureCount();
    },
    setDecks () {
      this.decks = decks;
      console.log(decks);
    },
    sumAll (nums) {
      let sum = 0;
      for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      return sum;
    },
    assignCardsToDecks () {
      const cardStore = useCardStore();
      let cardData = [];
      this.decks.forEach((deck) => {
        cardData = [];
        deck.cards.forEach((key) => {
          const deckCard = cardStore.cards.find((card) => card.key === key);
          if(deckCard != undefined) {
              cardData.push(deckCard)
          }
        })
        deck.cardData = cardData;
      })
      console.log(decks)
    },
    calcDecksPower() {
      this.decks.forEach((deck) => {
        let deckPower = [];
        console.log(deck)
        deck.cardData.forEach((card) => {
          if(card.type === 2) {
            deckPower.push(card.power);
          }
        })
        const deckSum = this.sumAll(deckPower);
        deck.power = deckSum;
      })
    },
    calcDecksAember() {
      this.decks.forEach((deck) => {
        let deckAember = [];
        deck.cardData.forEach((card) => {
          deckAember.push(card.bonusIcons.aember);
        })
        const deckSum = this.sumAll(deckAember);
        deck.aember = deckSum;
      })
    },
    calcCreatureCount() {
      this.decks.forEach((deck) => {
        let deckCreature =[];
        deck.cardData.forEach((card) => {
          if(card.type === 2) {
            deckCreature.push(1);
          }
        })
        const deckSum = this.sumAll(deckCreature);
        deck.creatureCount = deckSum;
      })
    }
  }
})
