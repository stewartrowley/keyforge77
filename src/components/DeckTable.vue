<template>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">
            Deck Name
          </th>
          <th class="text-left">
            AEmber Pips
          </th>
          <th class="text-left">
            Total Power
          </th>
          <th class="text-left">
            Creature Count
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item, index in deckStore.decks"
          :key="index"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.aember }}</td>
          <td>{{ item.power }}</td>
          <td>{{ item.creatureCount }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
<script>
import { useDeckStore } from '../stores/deckStore';
export default {
    setup() {
        const deckStore = useDeckStore();
        return {
            deckStore
        }
    },
    mounted() {
        console.log(this.deckStore.decks)

    }
}
</script>
<style scope>
    
</style>