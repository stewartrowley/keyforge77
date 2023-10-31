import { defineStore } from 'pinia'
import ApiService from '../services/apiService';


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
            qtySelected: null,
            abilitySelected: null,
            cardOtherSetsSelected: [],
            cardTraitsSelected: null,
            cardDescription: null,
            cardTypeShow: false,
            cardTypeOptions: [
                {value: 'action', name: "Action"},
                {value: 'creature', name: "Creature"},
                {value: 'artifact', name: "Artifact"},
                {value: 'upgrade', name: "Upgrade"}
            ],
            setOptions: [
                {value: "CotA", path: "call_to_the_archons", name: "Call to The Archons", houseIds: [1, 2, 5, 6, 7, 9, 13]},
                {value: "AoA", path: "age_of_ascension", name: "Age of Ascension", houseIds: [1, 2, 5, 6, 7, 9, 13]},
                {value: "WC", path: "worlds_collide", name: "Worlds Collide", houseIds: [1, 2, 5, 8, 9, 11, 13]},
                {value: "MM", path: "mass_mutations", name: "Mass Mutations", houseIds: [2, 5, 7, 8, 9, 11, 13]},
                {value: "DT", path: "dark_tidings", name: "Dark Tidings", houseIds: [5, 7, 8, 9, 11, 12, 13]},
                {value: "WoE", path: "winds_of_exchange", name: "Winds of Exchange", houseIds: [1, 3, 6, 7, 8, 11, 12]},
                {value: 'VM2023', path: "vm_2023", name: "Vault Masters 2023", houseIds: [1, 2, 5, 6, 8, 11, 13]}
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
            cardAbilitiesOptions: [
                {value: 'stealO', name: 'stealO'},
                {value: 'drawY', name: 'drawY'},
                {value: 'drawO', name: 'drawO'},
                {value: 'drawB', name: 'drawB'},
                {value: 'drawC', name: 'drawC'},
                {value: 'lookY', name: 'lookY'},
                {value: 'discardY', name: 'discardY'},
                {value: 'discardO', name: 'discardO'},
                {value: 'discardB', name: 'discardB'},
                {value: 'discardC', name: 'discardC'},
                {value: 'archiveY', name: 'archiveY'},
                {value: 'archiveO', name: 'archiveO'},
                {value: 'archiveB', name: 'archiveB'},
                {value: 'archiveC', name: 'archiveC'},
                {value: 'stunY', name: 'stunY'},
                {value: 'stunO', name: 'stunO'},
                {value: 'stunB', name: 'stunB'},
                {value: 'stunC', name: 'stunC'},
                {value: 'playCardY', name: 'playCardY'},
                {value: 'playCardO', name: 'playCardO'},
                {value: 'playCardB', name: 'playCardB'},
                {value: 'playCardC', name: 'playCardC'},
                {value: 'useCardY', name: 'useCardY'},
                {value: 'useCardO', name: 'useCardO'},
                {value: 'useCardB', name: 'useCardB'},
                {value: 'useCardC', name: 'useCardC'},
                {value: 'returnY', name: 'returnY'},
                {value: 'returnO', name: 'returnO'},
                {value: 'returnB', name: 'returnB'},
                {value: 'returnC', name: 'returnC'},
                {value: 'deployY', name: 'deployY'},
                {value: 'elusiveY', name: 'elusiveY'},
                {value: 'skirmishY', name: 'skirmishY'},
                {value: 'damageY', name: 'damageY'},
                {value: 'damageO', name: 'damageO'},
                {value: 'damageB', name: 'damageB'},
                {value: 'damageYC', name: 'damageC'},
                {value: 'alphaY', name: 'alphaY'},
                {value: 'omegaY', name: 'omegaY'},
                {value: 'aemberGainY', name: 'aemberGainY'},
                {value: 'aemberGainO', name: 'aemberGainO'},
                {value: 'aemberGainB', name: 'aemberGainB'},
                {value: 'aemberGainC', name: 'aemberGainC'},
                {value: 'aemberLossY', name: 'aemberLossY'},
                {value: 'aemberLossO', name: 'aemberLossO'},
                {value: 'aemberLossB', name: 'aemberLossB'},
                {value: 'aemberLossC', name: 'aemberLossC'},
                {value: 'assaultY', name: 'assaultY'},
                {value: 'hazardessY', name: 'hazardessY'},
                {value: 'powerGainY', name: 'powerGainY'},
                {value: 'exhaustY', name: 'exhaustY'},
                {value: 'exhaustO', name: 'exhaustO'},
                {value: 'exhaustB', name: 'exhaustB'},
                {value: 'exhaustC', name: 'exhaustC'},
                {value: 'destroyY', name: 'destroyY'},
                {value: 'destroyO', name: 'destroyO'},
                {value: 'destroyB', name: 'destroyB'},
                {value: 'destroyC', name: 'destroyC'},
                {value: 'artifactRemovalY', name: 'artifactRemovalY'},
                {value: 'artifactRemovalO', name: 'artifactRemovalO'},
                {value: 'artifactRemovalB', name: 'artifactRemovalB'},
                {value: 'artifactRemovalC', name: 'artifactRemovalC'},
                {value: 'purgeY', name: 'purgeY'},
                {value: 'purgeO', name: 'purgeO'},
                {value: 'purgeB', name: 'purgeB'},
                {value: 'purgeC', name: 'purgeC'},
                {value: 'readyY', name: 'readyY'},
            ],
            cardTraitOptions: [
                {value: 'beast', name:'Beast'},
                {value: 'human', name: 'Human'},
                {value: 'witch', name: 'Witch'},
                {value: 'faerie', name: 'Faerie'},
                {value: 'vehicle', name: 'Vehicle'},
                {value: 'elf', name: 'Elf'},
                {value: 'thief', name: 'Thief'},
                {value: 'cyborg', name: 'Cyborg'},
                {value: 'scientist', name: 'Scientist'},
                {value: 'location', name: 'Location'},
                {value: 'ai', name: 'Ai'},
                {value: 'robot', name: 'Robot'},
                {value: 'rat', name: 'Rat'},
                {value: 'equation', name: 'Equation'},
                {value: 'item', name: 'Item'},
                {value: 'giant', name: 'Giant'},
                {value: 'weapon', name: 'Weapon'},
                {value: 'knight', name: 'Knight'},
                {value: 'goblin', name: 'Goblin'},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
                {value: '', name: ''},
            ]
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
            const abilities = this.abilitySelected.map((element) => {
                return element.name
            })
            const effects = this.cardEffectSelected.map((element) => {
                return element.name
            })
            let traits;
            if (type === 'artifact' || type === 'creature') {
                traits = this.cardTraitsSelected.map((element) => {
                    return element.name
                }) 
            }
            let otherSets = [];
            let otherSetKeys = [];
            
            this.cardOtherSetsSelected.forEach((item) => {
                console.log(item)
                otherSets.push(item.setName);
                otherSetKeys.push(item.setKey)
            })

            otherSets.push(this.setSelected.name)
            otherSetKeys.push(this.setSelected.value + this.cardKeySelected)

            this.aemberSelected = this.aemberSelected === null ? 0 : JSON.parse(this.aemberSelected);
            this.damageSelected = this.damageSelected === null ? 0 : JSON.parse(this.damageSelected);
            this.captureSelected = this.captureSelected === null ? 0 : JSON.parse(this.captureSelected);
            this.drawCardSelected = this.drawCardSelected === null ? 0 : JSON.parse(this.drawCardSelected);
            if (this.cardTypeSelected.value === 'creature') {
              this.armorSelected = this.armorSelected === null ? 0 : JSON.parse(this.armorSelected);
              this.powerSelected = this.powerSelected === null ? 0 : JSON.parse(this.powerSelected);
            }
            const fileName = this.cardTitleSelected;
            const formattedImage = fileName.replace(/ /g,"_")
            const imagePath = 'src/assets/keyforge-cards/' + this.setSelected.path + '/' + formattedImage + '.png';
            console.log('it made it')
            console.log(type)
            let cardObject;
            if(type === 'action') {
                console.log('action')
                cardObject = {
                    key: this.setSelected.value + this.cardKeySelected,
                    type: this.cardTypeSelected.value,
                    title: this.cardTitleSelected,
                    imageUri: imagePath,
                    house: this.cardHouseSelected.name,
                    bonusIcons: {
                        aember: this.aemberSelected,
                        damage: this.damageSelected,
                        draw: this.drawCardSelected,
                        capture: this.captureSelected
                    },
                    rarity: this.cardRaritySelected,
                    effect: effects,
                    effectDescription: this.cardDescription,
                    ability: abilities,
                    abilityQty: JSON.parse(this.qtySelected),
                    set: otherSets,
                    setId: otherSetKeys
                }
            } else if (type === 'creature') {
                console.log('creature')
                cardObject = {
                    key: this.setSelected.value + this.cardKeySelected,
                    type: this.cardTypeSelected.value,
                    title: this.cardTitleSelected,
                    imageUri: imagePath,
                    house: this.cardHouseSelected.name,
                    bonusIcons: {
                        aember: this.aemberSelected,
                        damage: this.damageSelected,
                        draw: this.drawCardSelected,
                        capture: this.captureSelected
                    },
                    rarity: this.cardRaritySelected,
                    power: this.powerSelected,
                    armor: this.armorSelected,
                    traits: traits,
                    effect: effects,
                    effectDescription: this.cardDescription,
                    ability: abilities,
                    abilityQty: JSON.parse(this.qtySelected),
                    set: otherSets,
                    setId: otherSetKeys
                }
            } else if (type === 'artifact') {
                console.log('artifact')
                cardObject = {
                    key: this.setSelected.value + this.cardKeySelected,
                    type: this.cardTypeSelected.value,
                    title: this.cardTitleSelected,
                    imageUri: imagePath,
                    house: this.cardHouseSelected.name,
                    bonusIcons: {
                        aember: this.aemberSelected,
                        damage: this.damageSelected,
                        draw: this.drawCardSelected,
                        capture: this.captureSelected
                    },
                    rarity: this.cardRaritySelected,
                    traits: traits,
                    effect: effects,
                    effectDescription: this.cardDescription,
                    ability: abilities,
                    abilityQty: JSON.parse(this.qtySelected),
                    set: otherSets,
                    setId: otherSetKeys
                }
            } else if (type === 'upgrade') {
                console.log('upgrade')
                cardObject = {
                    key: this.setSelected.value + this.cardKeySelected,
                    type: this.cardTypeSelected.value,
                    title: this.cardTitleSelected,
                    imageUri: imagePath,
                    house: this.cardHouseSelected.name,
                    bonusIcons: {
                        aember: this.aemberSelected,
                        damage: this.damageSelected,
                        draw: this.drawCardSelected,
                        capture: this.captureSelected
                    },
                    rarity: this.cardRaritySelected,
                    effect: effects,
                    effectDescription: this.cardDescription,
                    ability: abilities,
                    abilityQty: JSON.parse(this.qtySelected),
                    set: otherSets,
                    setId: otherSetKeys
                }
            }
            // const file = 'test.json'
            // const obj = { name: 'JP' }
            // jsonfile.push(obj)
                    
            // jsonfile.writeFile(file, obj, { flag: 'a' }, function (err) {
            //   if (err) console.error(err)
            // })
            ApiService.addCard(cardObject)
            .then(() => {
                this.clearCardSubmission();
            }) 
            .catch((error) => {
                console.log(error)
            })
            
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
            this.cardOtherSetsSelected = []
            this.qtySelected = null
        }
    }
})