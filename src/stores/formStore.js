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
                {value: 'play/fight/reap', name: "Play/Fight/Reap"},
                {value: 'fight/reap', name: "Fight/Reap"},
                {value: 'after fight/after reap', name: 'After Fight/After Reap'},
                {value: 'play/after fight/after reap', name: 'Play/After Fight/After Reap'},
                {value: 'play/reap', name: 'Play/Reap'}
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
                {value: 'poisonY', name:'poisonY'},
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
                {value: 'restrictPlayCardY', name: 'restrictPlayCardY'},
                {value: 'restrictPlayCardO', name: 'restrictPlayCardO'},
                {value: 'restrictPlayCardB', name: 'restrictPlayCardB'},
                {value: 'restrictPlayCardC', name: 'restrictPlayCardC'},
                {value: 'useCardY', name: 'useCardY'},
                {value: 'useCardO', name: 'useCardO'},
                {value: 'useCardB', name: 'useCardB'},
                {value: 'useCardC', name: 'useCardC'},
                {value: 'controlCardY', name: 'controlCardY'},
                {value: 'controlCardO', name: 'controlCardO'},
                {value: 'controlCardB', name: 'controlCardB'},
                {value: 'controlCardC', name: 'controlCardC'},
                {value: 'returnY', name: 'returnY'},
                {value: 'returnO', name: 'returnO'},
                {value: 'returnB', name: 'returnB'},
                {value: 'returnC', name: 'returnC'},
                {value: 'deployY', name: 'deployY'},
                {value: 'elusiveY', name: 'elusiveY'},
                {value: 'elusiveO', name: 'elusiveO'},
                {value: 'elusiveB', name: 'elusiveB'},
                {value: 'elusiveC', name: 'elusiveC'},
                {value: 'elusiveLossY', name: 'elusiveLossY'},
                {value: 'elusiveLossO', name: 'elusiveLossO'},
                {value: 'elusiveLossB', name: 'elusiveLossB'},
                {value: 'elusiveLossC', name: 'elusiveLossC'},
                {value: 'skirmishY', name: 'skirmishY'},
                {value: 'skirmishO', name: 'skirmishO'},
                {value: 'skirmishB', name: 'skirmishB'},
                {value: 'skirmishC', name: 'skirmishC'},
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
                {value: 'moveAemberY', name: 'moveAemberY'},
                {value: 'moveAemberO', name: 'moveAemberO'},
                {value: 'moveAemberB', name: 'moveAemberB'},
                {value: 'moveAemberC', name: 'moveAemberC'},
                {value: 'assaultY', name: 'assaultY'},
                {value: 'hazardessY', name: 'hazardessY'},
                {value: 'hazardessO', name: 'hazardessO'},
                {value: 'hazardessB', name: 'hazardessB'},
                {value: 'hazardessC', name: 'hazardessC'},
                {value: 'powerGainY', name: 'powerGainY'},
                {value: 'powerGainO', name: 'powerGainO'},
                {value: 'powerGainB', name: 'powerGainB'},
                {value: 'powerGainC', name: 'powerGainC'},
                {value: 'powerLossY', name: 'powerLossY'},
                {value: 'powerLossO', name: 'powerLossO'},
                {value: 'powerLossB', name: 'powerLossB'},
                {value: 'powerLossC', name: 'powerLossC'},
                {value: 'armorGainY', name: 'armorGainY'},
                {value: 'armorGainO', name: 'armorGainO'},
                {value: 'armorGainB', name: 'armorGainB'},
                {value: 'armorGainC', name: 'armorGainC'},
                {value: 'armorLossY', name: 'armorLossY'},
                {value: 'armorLossO', name: 'armorLossO'},
                {value: 'armorLossB', name: 'armorLossB'},
                {value: 'armorLossC', name: 'armorLossC'},
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
                {value: 'artifactUseY', name: 'artifactUseY'},
                {value: 'artifactUseO', name: 'artifactUseO'},
                {value: 'artifactUseB', name: 'artifactUseB'},
                {value: 'artifactUseC', name: 'artifactUseC'},
                {value: 'purgeY', name: 'purgeY'},
                {value: 'purgeO', name: 'purgeO'},
                {value: 'purgeB', name: 'purgeB'},
                {value: 'purgeC', name: 'purgeC'},
                {value: 'readyY', name: 'readyY'},
                {value: 'gainChainsY', name: 'gainChainsY'},
                {value: 'gainChainsO', name: 'gainChainsO'},
                {value: 'gainChainsB', name: 'gainChainsB'},
                {value: 'gainChainsC', name: 'gainChainsC'},
                {value: 'attackFlankY', name: 'attackFlankY'},
                {value: 'attackFlankO', name: 'attackFlankO'},
                {value: 'attackFlankB', name: 'attackFlankB'},
                {value: 'attackFlankC', name: 'attackFlankC'},
                {value: 'defenseLessY', name: 'defenseLessY'},
                {value: 'defenseLessO', name: 'defenseLessO'},
                {value: 'defenseLessB', name: 'defenseLessB'},
                {value: 'defenseLessC', name: 'defenseLessC'},
                {value: 'splashY', name: 'splashY'},
                {value: 'splashO', name: 'splashO'},
                {value: 'splashB', name: 'splashB'},
                {value: 'splashC', name: 'splashC'},
                {value: 'keyCostAddY', name: 'keyCostAddY'},
                {value: 'keyCostAddO', name: 'keyCostAddO'},
                {value: 'keyCostAddB', name: 'keyCostAddB'},
                {value: 'keyCostAddC', name: 'keyCostAddC'},
                {value: 'keyCostMinusY', name: 'keyCostMinusY'},
                {value: 'keyCostMinusO', name: 'keyCostMinusO'},
                {value: 'keyCostMinusB', name: 'keyCostMinusB'},
                {value: 'keyCostMinusC', name: 'keyCostMinusC'},
                {value: 'mustFightY', name: 'mustFightY'},
                {value: 'mustFightO', name: 'mustFightO'},
                {value: 'mustFightB', name: 'mustFightB'},
                {value: 'mustFightC', name: 'mustFightC'},
                {value: 'forgeKeyY', name: 'forgeKeyY'},
                {value: 'forgeKeyO', name: 'forgeKeyO'},
                {value: 'forgeKeyB', name: 'forgeKeyB'},
                {value: 'forgeKeyC', name: 'forgeKeyC'},
                {value: 'restrictForgeKeyY', name: 'restrictForgeKeyY'},
                {value: 'restrictForgeKeyO', name: 'restrictForgeKeyO'},
                {value: 'restrictForgeKeyB', name: 'restrictForgeKeyB'},
                {value: 'restrictForgeKeyC', name: 'restrictForgeKeyC'},
                {value: 'captureY', name: 'captureY'},
                {value: 'captureO', name: 'captureO'},
                {value: 'captureB', name: 'captureB'},
                {value: 'captureC', name: 'captureC'},
                {value: 'tauntY', name: 'tauntY'},
                {value: 'tauntO', name: 'tauntO'},
                {value: 'tauntB', name: 'tauntB'},
                {value: 'tauntC', name: 'tauntC'},
                {value: 'tauntLossY', name: 'tauntLossY'},
                {value: 'tauntLossO', name: 'tauntLossO'},
                {value: 'tauntLossB', name: 'tauntLossB'},
                {value: 'tauntLossC', name: 'tauntLossC'},
                {value: 'handCountLessY', name: 'handCountLessY'},
                {value: 'handCountLessO', name: 'handCountLessO'},
                {value: 'handCountLessB', name: 'handCountLessB'},
                {value: 'handCountLessC', name: 'handCountLessC'},
                {value: 'handCountMoreY', name: 'handCountMoreY'},
                {value: 'handCountMoreO', name: 'handCountMoreO'},
                {value: 'handCountMoreB', name: 'handCountMoreB'},
                {value: 'handCountMoreC', name: 'handCountMoreC'},
                {value: 'houseRestrictY', name: 'houseRestrictY'},
                {value: 'houseRestrictO', name: 'houseRestrictO'},
                {value: 'houseRestrictB', name: 'houseRestrictB'},
                {value: 'houseRestrictC', name: 'houseRestrictC'},
                {value: 'healY', name: 'healY'},
                {value: 'healO', name: 'healO'},
                {value: 'healB', name: 'healB'},
                {value: 'healC', name: 'healC'},
                {value: 'harmLessY', name: 'harmLessY'},
                {value: 'harmLessO', name: 'harmLessO'},
                {value: 'harmLessB', name: 'harmLessB'},
                {value: 'harmLessC', name: 'harmLessC'},
                {value: 'unableStealY', name: 'unableStealY'},
                {value: 'unableStealO', name: 'unableStealO'},
                {value: 'unableStealB', name: 'unableStealB'},
                {value: 'unableStealC', name: 'unableStealC'},
                {value: 'unableReapY', name: 'unableReapY'},
                {value: 'unableReapO', name: 'unableReapO'},
                {value: 'unableReapB', name: 'unableReapB'},
                {value: 'unableReapC', name: 'unableReapC'},    
                {value: 'unableFightY', name: 'unableFightY'},
                {value: 'unableFightO', name: 'unableFightO'},
                {value: 'unableFightB', name: 'unableFightB'},
                {value: 'unableFightC', name: 'unableFightC'},  
                {value: 'redistributeDamageY', name: 'redistributeDamageY'},
                {value: 'redistributeDamageO', name: 'redistributeDamageO'},
                {value: 'redistributeDamageB', name: 'redistributeDamageB'},
                {value: 'redistributeDamageC', name: 'redistributeDamageC'},
                {value: 'redistributeAemberY', name: 'redistributeAemberY'},
                {value: 'redistributeAemberO', name: 'redistributeAemberO'},
                {value: 'redistributeAemberB', name: 'redistributeAemberB'},
                {value: 'redistributeAemberC', name: 'redistributeAemberC'}, 
                {value: 'swapY', name: 'swapY'},
                {value: 'swapO', name: 'swapO'},
                {value: 'swapB', name: 'swapB'},
                {value: 'swapC', name: 'swapC'},           
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
                {value: 'insect', name: 'Insect'},
                {value: 'tree', name: 'Tree'},
                {value: 'ranger', name: 'Ranger'},
                {value: 'martian', name: 'Martian'},
                {value: 'soldier', name: 'Soldier'},
                {value: 'mutant', name: 'Mutant'},
                {value: 'imp', name: 'Imp'},
                {value: 'demon', name: 'Demon'},
                {value: 'shard', name: 'Shard'},
                {value: 'power', name: 'Power'},
                {value: 'redacted', name: 'Redacted'},
                {value: 'agent', name: 'Agent'},
                {value: 'ally', name: 'Ally'},
                {value: 'spirit', name: 'Spirit'},
                {value: 'monk', name: 'Monk'},
                {value: 'merchant', name: 'Merchant'},
                {value: 'quest', name: 'Quest'},
                {value: 'law', name:'Law'},
                {value: 'angel', name:'Angel'}
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