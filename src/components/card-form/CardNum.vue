<template>
    <div class="card-num-container">
        <label>{{ this.$props.label }}</label>
        <input required class="card-num-input" type="number" @change="this.handleNum()" :value="0" @focus="$event.target.select()">
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
    props: [
        'label',
        'type'
    ],
    methods: {
        handleNum () {
            console.log(event.target.value);
            switch(this.$props.type) {
              case 'aember':
                this.formStore.aemberSelected = event.target.value;
                break;
              case 'damage':
                this.formStore.damageSelected = event.target.value;
                break;
              case 'capture': 
                this.formStore.captureSelected = event.target.value;
                break;
              case 'drawCard': 
                this.formStore.drawCardSelected = event.target.value;
                break;
              case 'power': 
                this.formStore.powerSelected = event.target.value;
                break;
              case 'armor': 
                this.formStore.armorSelected = event.target.value;
                break;
              case 'qty': 
                this.formStore.qtySelected = event.target.value;
                break;
              default:
                // code block
            }
        }
    }
}
</script>
<style scoped>
    .card-num-container {
        display: flex;
        flex-direction: column;
    }
    .card-num-input {
      border-style: solid;
      border-color: var(--lightblk);
      border-radius: 5px;
      padding: 0.5em;
      width: 150px;
    }
</style>