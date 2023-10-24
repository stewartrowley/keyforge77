import { defineStore } from 'pinia'
import { useDeckStore } from './deckStore';

export const usePodStore = defineStore('pod', {
  state () {
    return {
      pods: []
    };
  },
  getters: {
    getCards () {
      return this.pods;
    },
  },
  actions: {
    setPods () {
        const deckStore = useDeckStore();
        deckStore.decks.forEach((deck) => {
            deck.houses.forEach((house) => {
                deck['pod' + house] = [];
            })
            deck.cardData.forEach((card) => {
                const cardHouse = deck.houses.find((house) => house === card.house);
                if(cardHouse != undefined) {
                    const podHouse = 'pod' + cardHouse;
                    console.log(podHouse);
                    deck[podHouse].push(card);
                }
            })
            deck.houses.forEach((house) => {
                this.pods.push({deckName: deck.name, podHouse: house, pod: deck['pod'+ house]})
            })
              console.log(deck);
              console.log(this.pods)
        })

    },
    getHouseType (key) {
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
