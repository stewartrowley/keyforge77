<template>
  <div>
    <HouseLayout :house="keyforgeHouse"/>
  </div>
</template>
<script>
import HouseLayout from '../components/HouseLayout.vue'
export default {
components: {HouseLayout},
  computed: {
    keyforgeHouse () {
        return this.$route.params.id
    }

  }
  // methods: {
  //     getHouseData() {

  //     }
  // },
}
</script>
<style scoped></style>
