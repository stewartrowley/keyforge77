import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', { 
    state () {
        return {
            setSelected: null,
            setHouses: null,
            cardTypeSelected: null,
            cardHouseSelected: null,
            cardTitleSelected: null,
            cardKeySelected: null,
            aemberSelected: null,
            damageSelected: null,
            captureSelected: null,
            drawCardSelected: null,
            powerSelected: null,
            armorSelected: null,
            cardRaritySelected: null,
            imageSelected: null,
            cardEffectSelected: null,
            cardDescription: null,
            cardTypeShow: false,
            cardTypeOptions: [
                {value: 'action', name: "Action"},
                {value: 'creature', name: "Creature"},
                {value: 'artifact', name: "Artifact"},
                {value: 'upgrade', name: "Upgrade"}
            ],
            setOptions: [
                {value: "CotA", name: "Call to The Archons", houseIds: [1, 2, 5, 6, 7, 9, 13]},
                {value: "AoA", name: "Age of Ascencion", houseIds: [1, 2, 5, 6, 7, 9, 13]},
                {value: "WC", name: "Worlds Collide", houseIds: [1, 2, 5, 8, 9, 11, 13]},
                {value: "MM", name: "Mass Mutations", houseIds: [2, 5, 7, 8, 9, 11, 13]},
                {value: "DT", name: "Dark Tidings", houseIds: [5, 7, 8, 9, 11, 12, 13]},
                {value: "WoE", name: "Winds of Exchange", houseIds: [1, 3, 6, 7, 8, 11, 12]}
            ],
            cardEffectOptions: [
                {value: 'neutral', name: "Neutral"},
                {value: 'play', name: "Play"},
                {value: 'action', name: "Action"},
                {value: 'fight', name: "Fight"},
                {value: 'reap', name: "Reap"},
                {value: 'omni', name: "Omni"},
                {value: 'destroyed', name: "Destroyed"},
                {value: 'before fight', name: "Before Fight"},
                {value: 'after Fight', name: "After Fight"},
                {value: 'after reap', name: "After Reap"},
            ],
            cardHouseOptions: [
                { id: 1, value: 'brobnar', name: 'Brobnar'},
                { id: 2, value: 'dis', name: 'Dis'},
                { id: 3, value: 'ekwidon', name: 'Ekwidon'},
                { id: 4, value: 'geistoid', name: 'Geistoid'},
                { id: 5, value: 'logos', name: 'Logos'},
                { id: 6, value: 'mars', name: 'Mars'},
                { id: 7, value: 'sanctum', name: 'Sanctum'},
                { id: 8, value: 'saurian', name: 'Saurian'},
                { id: 9, value: 'shadows', name: 'Shadows'},
                { id: 10, value: 'skyborn', name: 'Skyborn'},
                { id: 11, value: 'star alliance', name: 'Star Alliance'},
                { id: 12, value: 'unfathomable', name: 'Unfathomable'},
                { id: 13, value: 'untamed', name: 'Untamed'}
            ],
            cardRarityOptions: [
                {value: 'common', name: "Common"},
                {value: 'uncommon', name: "Uncommon"},
                {value: 'rare', name: "Rare"},
                {value: 'special', name: "Special"}
            ],
        }
    },
    getters: {
        getSetOptions () {
            return this.setOptions;
        },
        getCardTypeOptions () {
            return this.cardTypeOptions;
        },
        getCardEffectOptions () {
            return this.cardEffectOptions;
        },
        getCardRarityOptions () {
            return this.cardRarityOptions;
        },
        getSelectedSet () {
            return this.setSelected;
        }
    },

    actions: {
        getSetHouses () {
            this.setHouses = [];
            this.cardHouseOptions.forEach((item) => {
                if(this.setSelected.houseIds.includes(item.id)) {
                    this.setHouses.push(item)
                }
            })
        },
        cardSubmission () {
            const type = this.cardTypeSelected.value;
            let cardObject;
            if(type === 'action') {
                console.log('action')
                cardObject = {
                    key: this.cardKeySelected,
                    type: this.cardTypeSelected.value,
                    title: this.cardTitleSelected,
                    imageUri: null,
                    house: this.cardHouseSelected.value,
                    bonusIcons: {
                        aember: this.aemberSelected,
                        damage: this.damageSelected,
                        draw: this.drawCardSelectedm,
                        capture: this.captureSelected
                    },
                    rarity: this.cardRaritySelected,
                    effect: this.cardEffectSelected,
                    effectDescription: this.cardDescription,
                }
            } else if (type === 'creature') {
                console.log('creature')
                // cardObject = {

                // }
            } else if (type === 'artifact') {
                console.log('artifact')
                // cardObject = {

                // }
            } else if (type === 'upgrade') {
                console.log('upgrade')
                // cardObject = {

                // }
            }
            console.log(cardObject);
        },
        clearCardSubmission () {
            this.cardTypeShow = false;
            this.setSelected = null
            this.setHouses = null
            this.cardTypeSelected = null
            this.cardHouseSelected = null
            this.cardTitleSelected = null
            this.cardKeySelected = null
            this.aemberSelected = null
            this.damageSelected = null
            this.captureSelected = null
            this.drawCardSelected = null
            this.powerSelected = null
            this.armorSelected = null
            this.cardRaritySelected = null
            this.imageSelected = null
            this.cardEffectSelected = null
            this.cardDescription = null
        }
    }
})