import { defineStore } from 'pinia'
import houses from '../json/houses.json'

export const useSetStore = defineStore('set', {
  state () {
    return {
      houses: []
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
  }
})
