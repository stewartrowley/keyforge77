<template>
    <div v-for="pod, index in podDetails" :key="index">
        <div class="pod-bar">
            <div>
                <h1>{{ pod.deckName }}</h1>
            </div>
            <div class="pod-layout-icons">
                <div
                  class="pod-icon-box"
                  :style="this.handleBackground(pod.podHouse)"
                >
                  <img class="pod-icon" :src="this.getHouseIcon(pod.podHouse)" />
                  <h3>{{ pod.podHouse }}</h3>
                </div>
            </div>
        </div>
        <CardLayout :cards="pod.pod" />
    </div>
</template>
<script>
import { usePodStore } from '../stores/podStore';
import { useSetStore } from '../stores/setStore';
import CardLayout from './CardLayout.vue';
export default {
    computed: {
        podDetails() {
            return this.podStore.pods;
        }
    },
    methods: {
    getHouseIcon(house) {
      let houseIcon
      this.setStore.houses.forEach((element) => {
        if (element.house === house) {
          houseIcon = element.houseIcon
        }
      })
      return houseIcon
    },
    handleBackground(item) {
      console.log(item)
      let houseColor
      this.setStore.houses.forEach((element) => {
        if (element.house === item) {
          houseColor = element.houseColor
        }
      })
      return {
        'background-color': houseColor,
        height: '100%'
      }
    }
    },
    setup() {
        const podStore = usePodStore();
        const setStore = useSetStore();
        return {
            podStore,
            setStore
        }
    },
    components: {
        CardLayout
    }
}
</script>
<style scoped>
.pod-bar {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
}
.pod-layout-icons {
    height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.pod-icon-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: small;
}
.pod-icon {
  width: 40px;
  height: 40px;
}  
</style>