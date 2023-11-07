import { defineStore } from 'pinia'
import { useDeckStore } from './deckStore'

export const usePodStore = defineStore('pod', {
  state() {
    return {
      pods: []
    }
  },
  getters: {
    getCards() {
      return this.pods
    }
  },
  actions: {
    sumAll (nums) {
      let sum = 0;
      for(let i = 0; i < nums.length; i++) {
        sum += JSON.parse(nums[i]);
      }
      return sum;
    },
    setPods() {
      const deckStore = useDeckStore()
      deckStore.decks.forEach((deck) => {
        deck.houses.forEach((house) => {
          deck['pod' + house] = []
        })
        deck.cardData.forEach((card) => {
          const cardHouse = deck.houses.find((house) => house === card.house)
          if (cardHouse != undefined) {
            const podHouse = 'pod' + cardHouse
            console.log(podHouse)
            deck[podHouse].push(card)
          }
        })
        deck.houses.forEach((house) => {
          this.pods.push({ deckName: deck.name, podHouse: house, pod: deck['pod' + house] })
        })
        console.log(deck)
        console.log(this.pods)
      })
      this.getPodStats();
    },

    getPodStats () {
      this.pods.forEach((item) => {
        let podPower = [];
        let podAember = [];
        let podCreatureCount = [];
        let podActionCount = [];
        let podArtifactCount = [];
        let podUpgradeCount = [];
        let podFraScore = []
        item.pod.forEach((element) => {
          podAember.push(element.bonusIcons.aember)
          if(element.type === 'creature') {
            podPower.push(element.power);
            podCreatureCount.push(1);
          } else if (element.type === 'action') {
            podActionCount.push(1);
          } else if (element.type === 'artifact') {
            podArtifactCount.push(1)
          } else if (element.type === 'upgrade') {
            podUpgradeCount.push(1);
          }
          element.effect.forEach((effect) => {
            if(effect === 'Play' || effect === 'Omni' || effect === 'Destroyed' || effect === 'Play/Fight/Reap' || effect === 'Play/After Fight/After Reap' || effect === 'Play/Reap' ) {
              podFraScore.push(1)
            } else if (effect === 'Action' || effect === 'Fight' || effect === 'Reap' || effect === 'Before Fight' || effect === 'After Fight' || effect === 'After Reap' || effect === 'Fight/Reap' || effect === 'After Fight/After Reap') {
              podFraScore.push(-1)
            } else if (effect === 'Neutral') {
              podFraScore.push(0)
            }         
          })
        })
        const podPowerSum = this.sumAll(podPower);
        const podAemberSum = this.sumAll(podAember);
        const podCreatureSum = this.sumAll(podCreatureCount);
        const podActionSum = this.sumAll(podActionCount);
        const podArtifactSum = this.sumAll(podArtifactCount);
        const podUpgradeSum = this.sumAll(podUpgradeCount);
        const podFraSum = this.sumAll(podFraScore);
        item.power = podPowerSum;
        item.aember = podAemberSum;
        item.creatureCount = podCreatureSum;
        item.actionCount = podActionSum;
        item.artifactCount = podArtifactSum;
        item.upgradeCount = podUpgradeSum;
        item.podFraScore = podFraSum; 
      })
    },

    getHouseType(key) {
      switch (key) {
        case 1:
          return 'Action'
        case 2:
          return 'Creature'
        case 3:
          return 'Artifact'
        case 4:
          return 'Upgrade'
      }
    }
  }
})
