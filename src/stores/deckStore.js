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
      this.calcActionCount();
      this.calcArtifactCount();
      this.calcUpgradeCount();
      this.calcPlayEffects();
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
          if(card.type === 'creature') {
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
          if(card.type === 'creature') {
            deckCreature.push(1);
          }
        })
        const deckSum = this.sumAll(deckCreature);
        deck.creatureCount = deckSum;
      })
    },
    calcActionCount() {
      this.decks.forEach((deck) => {
        let deckActions =[];
        deck.cardData.forEach((card) => {
          if(card.type === 'action') {
            deckActions.push(1);
          }
        })
        const deckSum = this.sumAll(deckActions);
        deck.actionCount = deckSum;
      })
    },
    calcArtifactCount() {
      this.decks.forEach((deck) => {
        let deckArtifact =[];
        deck.cardData.forEach((card) => {
          if(card.type === 'artifact') {
            deckArtifact.push(1);
          }
        })
        const deckSum = this.sumAll(deckArtifact);
        deck.artifactCount = deckSum;
      })
    },
    calcUpgradeCount() {
      this.decks.forEach((deck) => {
        let deckUpgrades =[];
        deck.cardData.forEach((card) => {
          if(card.type === 'upgrade') {
            deckUpgrades.push(1);
          }
        })
        const deckSum = this.sumAll(deckUpgrades);
        deck.upgradeCount = deckSum;
      })
    },
    calcPlayEffects() {
      this.decks.forEach((deck) => {
        let deckPlayEffects = [];
        deck.cardData.forEach((card) => {
          card.effect.forEach((element) => {
            if(element === 'Play' || element === 'Play/Fight/Reap' || element === 'Play/Reap' || element === 'Play/After Fight/After Reap') {
              deckPlayEffects.push(1)
            }
          })
        })
        console.log(deckPlayEffects)
        const deckSum = this.sumAll(deckPlayEffects)
        deck.playEffectCount = deckSum
      })
    }
  }
})
