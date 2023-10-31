<template>
  <div>
    <h1 class="card-form-title">Keyforge Card Data</h1>
    <div class="card-form-section1">
      <div>
        <CardDropdown
          :options="getCardTypeOptions"
          type="cardType"
          label="Card Type"
          placeholder="Select Card Type"
        />
      </div>

      <CardDropdown
        v-if="getCardTypeShow"
        :options="getSetOptions"
        type="set"
        label=" Card Set"
        placeholder="Select Card Set"
      />
      <div v-if="getSetHouses != null">
        <CardDropdown
          :options="getSetHouses"
          type="cardHouse"
          label="Card House"
          placeholder="Select Card House"
        />
      </div>
    </div>
    <div v-if="getSetHousesSelected != null">
      <div class="card-form-section2">
        <div>
          <!-- <CardUpload /> -->
          <CardText label="Card Key" type="cardKey" />
          <CardText label="Card Title" type="cardTitle" />
          <CardDescription label="Card Description" />
          <div>
            <h2>Bonus Icons</h2>
            <div class="card-form-bonus">
              <CardNum label="Aember" type="aember" />
              <CardNum label="Damage" type="damage" />
              <CardNum label="Capture" type="capture" />
              <CardNum label="Draw Card" type="drawCard" />
            </div>
          </div>
        </div>
        <div>
          <CardNum label="Ability Qty" type="qty" />
          <CardSelector
            :cardData="formStore.cardAbilitiesOptions"
            type="ability"
            title="Card Ability"
          />
        </div>
      </div>
      <div class="card-form-section3">
        <div>
          <CardSelector :cardData="getCardEffectOptions" type="effect" title="Card Effect" />
          <CardRadio :options="getCardRarityoptions" title="Card Rarity" type="rarity" />
        </div>
        <CardMutltiSet />
      </div>
      <div
        v-if="getCardType === 'artifact' || getCardType === 'creature'"
        class="card-form-section4"
      >
        <CardSelector
          v-if="getCardType === 'artifact' || getCardType === 'creature'"
          :cardData="getCardTraits"
          type="traits"
          title="Card Traits"
        />
        <div v-if="getCardType === 'creature'">
          <CardNum label="Power" type="power" />
          <CardNum label="Armor" type="armor" />
        </div>
      </div>
      <!-- <CardCheckBox :options="getCardEffectOptions" title="Card Effect"/> -->
    </div>
    <button class="card-form-button" @click="this.handleCardSubmission()">Add Card</button>
    <div>
        <p style="color: red;" v-if="showError">Something went wrong...</p>
    </div>
  </div>
</template>
<script>
import { useFormStore } from '../../stores/formStore'
import CardDescription from './CardDescription.vue'
import CardDropdown from './CardDropdown.vue'
import CardNum from './CardNum.vue'
import CardRadio from './CardRadio.vue'
import CardText from './CardText.vue'
// import CardCheckBox from './CardCheckBox.vue'
// import CardUpload from './CardUpload.vue'
import CardSelector from './CardSelector.vue'
import CardMutltiSet from './CardMutltiSet.vue'

export default {
    data () {
        return {
            error: false
        }
    },
  setup() {
    const formStore = useFormStore()
    return {
      formStore
    }
  },
  computed: {
    showError () {
        return this.error;
    },
    getCardType() {
      return this.formStore.cardTypeSelected.value
    },
    getCardTypeShow() {
      return this.formStore.cardTypeShow
    },
    getSetOptions() {
      return this.formStore.getSetOptions
    },
    getCardTypeOptions() {
      return this.formStore.getCardTypeOptions
    },
    getCardEffectOptions() {
      return this.formStore.getCardEffectOptions
    },
    getCardRarityoptions() {
      return this.formStore.getCardRarityOptions
    },
    getSetHouses() {
      return this.formStore.setHouses
    },
    getSetHousesSelected() {
      return this.formStore.cardHouseSelected
    },
    getCardTraits() {
      return this.formStore.cardTraitOptions
    }
  },
  // data() {
  //     return {

  //     };
  // },
  methods: {
    handleCardSubmission() {
      console.log('submit')
        let checkData = [];
        const type = this.formStore.cardTypeSelected.value;
        if(type === 'action' || type === 'upgrade') {
            checkData.push(this.formStore.cardKeySelected)
            checkData.push(this.formStore.cardTitleSelected);
            checkData.push(this.formStore.cardDescription);
            checkData.push(this.formStore.qtySelected);
            checkData.push(this.formStore.abilitySelected);
            checkData.push(this.formStore.cardEffectSelected);
            checkData.push(this.formStore.cardRaritySelected);

            if(checkData.includes(null)) {
                this.error = true
            }  else {
                this.error = false
                this.formStore.cardSubmission()
            }
        } else if (type === 'artifact') {
            checkData.push(this.formStore.cardKeySelected);
            checkData.push(this.formStore.cardTitleSelected);
            checkData.push(this.formStore.cardDescription);
            checkData.push(this.formStore.qtySelected);
            checkData.push(this.formStore.abilitySelected);
            checkData.push(this.formStore.cardEffectSelected);
            checkData.push(this.formStore.cardRaritySelected);
            checkData.push(this.formStore.cardTraitsSelected);
            if(checkData.includes(null)) {
                this.error = true
            }  else {
                this.error = false
                this.formStore.cardSubmission()
            }
        } else if (type === 'creature') {
            checkData.push(this.formStore.cardKeySelected);
            checkData.push(this.formStore.cardTitleSelected);
            checkData.push(this.formStore.cardDescription);
            checkData.push(this.formStore.qtySelected);
            checkData.push(this.formStore.abilitySelected);
            checkData.push(this.formStore.cardEffectSelected);
            checkData.push(this.formStore.cardRaritySelected);
            checkData.push(this.formStore.cardTraitsSelected);
            if(checkData.includes(null)) {
                this.error = true
            }  else {
                this.error = false
                this.formStore.cardSubmission()
            }
        }
    //   this.formStore.cardSubmission()
    }
  },
  components: {
    CardDropdown,
    CardNum,
    CardRadio,
    CardDescription,
    CardText,
    // CardUpload,
    CardSelector,
    CardMutltiSet
}
}
</script>
<style scoped>
.card-form-title {
  text-align: center;
  padding: 0 0 8px 0;
}
.card-form-bonus {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}
.card-form-section3 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
}
.card-form-section1 {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  align-items: center;
  gap: 1rem;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
}
.card-form-section2 {
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
  gap: 2rem;
}

.card-form-button {
    background-color: forestgreen;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
    padding: 8px;
}
</style>
