import { defineStore } from 'pinia'
import houses from '../json/houses.json'

export const useHouseStore = defineStore('house', {
  state () {
    return {
      houses: [],
      selectedHouse: null
    };
  },
  getters: {
    getHouses () {
      return this.houses;
    },
  },
  actions: {
    setHouses () {
      this.houses = houses;
    },
    setHouseRoute (house) {
        this.selectedHouse = house;
        this.$router.push(house);
    }
  }
})
