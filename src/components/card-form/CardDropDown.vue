<template>
  <div>
    <label>{{ this.$props.label }}</label>
    <v-icon size="large" color="black" icon="mdi-chevron-down"></v-icon>
    <div class="dropdown-select" @click="handleSelection">
      <div v-if="this.selectedOption === null">{{ this.$props.placeholder }}</div>
      <div v-else>{{ this.selectedOption }}</div>
      <v-icon class="dropdown-icon" icon="mdi-chevron-down"></v-icon>
    </div>
    <div class="dropdown-option-container" v-if="this.isOpen">
      <div
        class="dropdown-option"
        v-for="(option, index) in this.$props.options"
        :key="index"
        @click="handleOption(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { useFormStore } from '../../stores/formStore';
export default {
    setup () {
        const formStore = useFormStore();
        return {
            formStore
        }
    },
    data() {
        return {
            isOpen: false,
            selectedOption: null,
        }
    },
    props: [
        'options',
        'type',
        'label',
        'placeholder'
    ],
    methods: {
        handleOption(item) {
            this.selectedOption = item.name
            switch(this.$props.type) {
              case 'set':
                this.formStore.setSelected = item;
                this.formStore.getSetHouses();
                break;
              case 'cardType':
                this.formStore.cardTypeSelected = item;
                this.formStore.cardTypeShow = true;
                break;
              case 'cardHouse': 
                this.formStore.cardHouseSelected = item;
                break;
              default:
                // code block
            }
            this.isOpen = false;
            console.log(item);
        },
        handleSelection () {
            this.isOpen = this.isOpen ? false : true;
        }
    }
}
</script>
<style scoped>
.dropdown-icon {
  width: 20px;
  color: #ffffff;
}
.dropdown-select {
  user-select: none;
  background-color: navy;
  color: #ffffff;
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.dropdown-option-container {
  overflow-y: scroll;
  width: 200px;
  max-height: 200px;
  position: absolute;
  background-color: navy;
  color: #ffffff;
  z-index: 9;
}
.dropdown-option {
  padding: 1rem;
}
.dropdown-option:hover {
  background-color: #ffffff;
  color: navy;
  cursor: pointer;
}
</style>
