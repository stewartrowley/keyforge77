<!-- <template>
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="desserts"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
        <v-text-field
          :model-value="itemsPerPage"
          class="pa-2"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          hide-details
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        page: 1,
        itemsPerPage: 5,
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: false,
            title: 'Dessert (100g serving)',
          },
          { title: 'Calories', key: 'calories' },
          { title: 'Fat (g)', key: 'fat' },
          { title: 'Carbs (g)', key: 'carbs' },
          { title: 'Protein (g)', key: 'protein' },
          { title: 'Iron (%)', key: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
          },
        ],
      }
    },
    computed: {
      pageCount () {
        return Math.ceil(this.desserts.length / this.itemsPerPage)
      },
    },
  }
</script> -->
<!-- 
  <template>
  <v-data-table
    v-model:page="page"
    :headers="headers"
    :items="stats"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
  >
    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          :length="pageCount"
        ></v-pagination>
        <v-text-field
          :model-value="itemsPerPage"
          class="pa-2"
          label="Items per page"
          type="number"
          min="-1"
          max="15"
          hide-details
          @update:model-value="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
      </div>
    </template>
  </v-data-table>
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
    data () {
      return {
        page: 1,
        itemsPerPage: 8,
        headers: [
          {
            align: 'start',
            key: 'name',
            sortable: true,
            title: 'Keyforge Decks',
          },
          { title: 'Deck Name', key: 'name' },
          { title: 'Aember Pips', key: 'aemberPips' },
          { title: 'Total Power', key: 'totalPower' },
          { title: 'Creature Count', key: 'creatureCount' },
          { title: 'Action Count', key: 'actionCount' },
          { title: 'Artifact Count', key: 'artifactCount' },
          { title: 'Upgrade Count', key: 'upgradeCount' },
          { title: 'Play Effect #', key: 'playEffect' },
        ],
      }
    },
    computed: {
      pageCount () {
        return Math.ceil(this.stats.length / this.itemsPerPage)
      },
      stats () {
        const stats = this.deckStore.decks.map((item) => {
          return {
            name: item.name,
            aemberPips: item.aember,
            totalPower: item.power,
            creatureCount: item.creatureCount,
            actionCount: item.actionCount, 
            artifactCount: item.artifactCount,
            upgradCount: item.upgradeCount,
            playEffect: item.playEffectCount
          }
        })
        console.log(stats)
        return stats;
      }
    },
  }
</script> -->
<template>
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left" @click="this.handleSortedDeckName()">
            Deck Name
          </th>
          <th class="text-left" >
            AEmber Pips
          </th>
          <th class="text-left">
            Total Power
          </th>
          <th class="text-left" @click="this.handleSortedCreatureCount()">
            Creature Count
          </th>
          <th class="text-left">
            Action Count
          </th>
          <th class="text-left">
            Artifact Count
          </th>
          <th class="text-left">
            Upgrade Count
          </th>
          <th class="text-left">
            Play Effects #
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item, index in paginatedData"
          :key="index"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.aemberPips }}</td>
          <td>{{ item.totalPower }}</td>
          <td>{{ item.creatureCount }}</td>
          <td>{{ item.actionCount }}</td>
          <td>{{ item.artifactCount }}</td>
          <td>{{ item.upgradeCount }}</td>
          <td>{{ item.playEffect }}</td>
        </tr>
      </tbody>
    </v-table>
    <button @click="prevPage">
    Previous
  </button>
  <button @click="nextPage">
    Next
  </button>
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

    },
    computed: {
      stats () {
        const stats = this.deckStore.decks.map((item) => {
          return {
            name: item.name,
            aemberPips: item.aember,
            totalPower: item.power,
            creatureCount: item.creatureCount,
            actionCount: item.actionCount, 
            artifactCount: item.artifactCount,
            upgradeCount: item.upgradeCount,
            playEffect: item.playEffectCount
          }
        })
        console.log(stats)
        return stats;
      },
      pageCount(){
      let l = this.stats.length,
          s = this.size;
      return Math.ceil(l/s);
      },
      paginatedData(){
        const start = this.pageNumber * this.size,
        end = start + this.size;
        return this.stats.slice(start, end);
      }

    },
    data(){
    return {
      pageNumber: 0,  // default to page 0,
      size: 8,
      sortDeckNameIncrease: false,
      sortCreatureCountIncrease: false,
    }
  },
    methods: {
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      },
      handleSortedDeckName () {
        console.log('sorted')
        this.creatureCountIncrease = false
        this.sortDeckNameIncrease = this.sortDeckNameIncrease ? false : true;
        if(this.sortDeckNameIncrease) {
          this.deckStore.decks.sort(function(a, b) {
            return a.name.localeCompare(b.name);
          });
        } else {
          this.deckStore.decks.sort(function(a, b) {
            return b.name.localeCompare(a.name);
          });          
        }
      },
      handleSortedCreatureCount () {
        console.log('sorted')
        this.sortDeckNameIncrease = false
        this.sortCreatureCountIncrease = this.sortCreatureCountIncrease ? false : true;
        if(this.sortCreatureCountIncrease) {
          this.deckStore.decks.sort(function(a, b) {
            return a.creatureCount - b.creatureCount;
          });
        } else {
          this.deckStore.decks.sort(function(a, b) {
            return b.creatureCount - a.creatureCount;
          });        
        }
      }
    }
}
</script>
<style scope>
    
</style>