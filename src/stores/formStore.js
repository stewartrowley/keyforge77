import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', { 
    state () {
        return {
            setSelected: null,
            cardTypeSelected: null,
            cardHouseSelected: null
        }
    }
})