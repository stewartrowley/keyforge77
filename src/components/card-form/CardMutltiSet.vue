<template>
    <div>
        <div v-for="item, index in getExcludedHouses" :key="index">
            <div class="card-multi-checkbox-container" @change="this.handleChosenHouse(item)">
                <input class="card-multi-checkbox-input" :id="index" type="checkbox"/>
                <label class="card-multi-checkbox-label" :for="index">{{ item.name }} Key</label>
            </div>
            <div>
                <input ref="key" type="number" maxlength="3" minlength="3"  :disabled="item.isChecked === false || item.isChecked === undefined"  @change="this.handleOtherHouseKey(item)"/>
            </div>
        </div>
    </div>
</template>
<script>
import { useFormStore } from '../../stores/formStore';

export default {
    // data() {
    //     return {
    //         savedChecked: null
    //     }
    // },
    setup() {
        const formStore = useFormStore();
        return {
            formStore
        }
    },
    computed: {
        getExcludedHouses() {
            const sets = [];
            this.formStore.setOptions.forEach((item) => {
                if(item.name != this.formStore.setSelected.name) {
                    sets.push(item)
                }
            })
            return sets;
        }
    },
    methods: {
        handleChosenHouse (item) {
            if (event.target.checked) {
                item.isChecked = true;
            } else {
                this.$refs.key.value = null
                item.isChecked = false;
            }
        },
        handleOtherHouseKey (item) {
            const setKey = item.value + event.target.value;
            const setName = item.name;
            if(this.formStore.cardOtherSetsSelected.length != 0) {
                this.formStore.cardOtherSetsSelected.forEach((element) => {
                    if(element.name != setName) {
                        this.formStore.cardOtherSetsSelected.push({name: item.name, setKey: setKey, setName: setName})
                    }
                })
            } else {
                this.formStore.cardOtherSetsSelected.push({name: item.name, setKey: setKey, setName: setName})
            }
            console.log(this.formStore.cardOtherSetsSelected)
            console.log(setKey);
            console.log(setName);

        }
    }
}
</script>
<style scoped>
.card-multi-checkbox-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
}
.card-multi-checkbox-input {
    cursor: pointer;
}
.card-multi-checkbox-label {
    cursor: pointer;
    user-select: none;
}
</style>