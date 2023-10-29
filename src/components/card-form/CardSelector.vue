<template>
    <div>
        <div class="card-selector-select-box">
            <div class="card-selector-selected-container" v-for="item, index in getSelectedItems" :key="index">
                <p>{{ item.name }}</p>
                <div class="card-selector-close" @click="this.handleRemove(item)">
                    <p>X</p>
                </div>
            </div>
        </div>
        <div class="card-selector-input-box">
            <input type="text" >
        </div>
        <div class="card-selector-option-box">
            <div class="card-selector-option-container" v-for="item, index in getItems" :key="index" @click="handleOptionSelection(item)">
                <p>{{ item.name }}</p>
            </div>
        </div>
        
    </div>
</template>
<script>
import { useFormStore } from '../../stores/formStore'
export default {
    setup () {
        const formStore = useFormStore();
        return {
            formStore
        }
    },
    props: [
        'cardData',
        'type'
    ],
    data () {
        return {
            items: [],
            selectedItems: [],
        }
    },
    computed: {
        getItems() {
            console.log(this.items)
            if(this.items.length != 0) {
                return this.sortItems(this.items)
            } else {
                return this.items
            }
        },
        getSelectedItems () {
            if(this.selectedItems.length != 0) {
                return this.sortItems(this.selectedItems)
            } else { 
                return this.selectedItems
            }
        }
    },
    mounted() {
        this.items = this.$props.cardData;
    },
    methods: {
        handleOptionSelection (item) {
            let filteredItems = this.items.filter((element) => {
                return element.name != item.name;   
            });
            this.items = filteredItems;
            this.selectedItems.push(item)
            if(this.$props.type === 'ability') {
                this.formStore.abilitySelected = this.selectedItems;
            } else if (this.$props.type === 'effect') {
               this.formStore.cardEffectSelected = this.selectedItems;
            } else if (this.$props.type === 'traits') {
               this.formStore.cardTraitsSelected = this.selectedItems;
            }
            
        },
        handleRemove (item) {
            let filteredSelectedItems = this.selectedItems.filter((element) => {
                return element.name != item.name;   
            });
            this.selectedItems = filteredSelectedItems
            if(this.$props.type === 'ability') {
                this.formStore.abilitySelected = this.selectedItems;
            } else if (this.$props.type === 'effect') {
               this.formStore.cardEffectSelected = this.selectedItems;
            } else if (this.$props.type === 'traits') {
               this.formStore.cardTraitsSelected = this.selectedItems;
            }
            this.items.push(item)
        },
        sortItems(items)  {
            const data = items.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            });
            return data;
        }
    }
}
</script>
<style scoped>
    .card-selector-option-box {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        background-color: lightgray;
    }
    .card-selector-select-box {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    .card-selector-option-container {
        padding: 8px;
        margin: 4px;
        color: white;
        background-color: navy;
        border-radius: 5px;
        cursor: pointer;
    }
    .card-selector-selected-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        margin: 4px;
        color: white;
        background-color: forestgreen;
        border-radius: 5px;
        cursor: pointer;
    }
    .card-selector-close {
        color: white;
        background-color: red;
        padding: 3px;
        border-radius: 50%;
    }
</style>