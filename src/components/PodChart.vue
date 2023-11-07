<template>
   <v-table theme="light">
     <thead>
       <tr>
         <th class="text-left" @click="this.handleSortedDeckName()">
           Deck Name
         </th>
         <th class="text-left" @click="this.handleSortedAember()">
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
         <th class="text-left" @click="this.handleSortedPodFra()">
           PodFra Score
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
         <td>{{ item.podFraScore }}</td>
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
import { usePodStore } from '../stores/podStore'
export default {
   setup() {
       const podStore = usePodStore();
       return {
           podStore
       }
   },
   computed: {
     stats () {
       const stats = this.podStore.pods.map((item) => {
         return {
           name: item.deckName,
           aemberPips: item.aember,
           totalPower: item.power,
           creatureCount: item.creatureCount,
           actionCount: item.actionCount, 
           artifactCount: item.artifactCount,
           upgradeCount: item.upgradeCount,
           podFraScore: item.podFraScore
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
     sortAemberIncrease: false,
     sortPodFraIncrease: false
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
       this.sortAemberIncrease = false
       this.sortDeckNameIncrease = this.sortDeckNameIncrease ? false : true;
       if(this.sortDeckNameIncrease) {
         this.podStore.pods.sort(function(a, b) {
           return a.deckName.localeCompare(b.deckName);
         });
       } else {
         this.podStore.pods.sort(function(a, b) {
           return b.deckName.localeCompare(a.deckName);
         });          
       }
     },
     handleSortedCreatureCount () {
       console.log('sorted')
       this.sortDeckNameIncrease = false
       this.sortAemberIncrease = false
       this.sortCreatureCountIncrease = this.sortCreatureCountIncrease ? false : true;
       if(this.sortCreatureCountIncrease) {
         this.podStore.pods.sort(function(a, b) {
           return a.creatureCount - b.creatureCount;
         });
       } else {
         this.podStore.pods.sort(function(a, b) {
           return b.creatureCount - a.creatureCount;
         });        
       }
     },
     handleSortedAember () {
       console.log('sorted')
       this.sortDeckNameIncrease = false
       this.creatureCountIncrease = false
       this.sortAemberIncrease = this.sortAemberIncrease ? false : true;
       if(this.sortAemberIncrease) {
         this.podStore.pods.sort(function(a, b) {
           return a.aember - b.aember;
         });
       } else {
         this.podStore.pods.sort(function(a, b) {
           return b.aember - a.aember;
         });        
       }
     },
     handleSortedPodFra() {
         this.sortDeckNameIncrease = false
         this.creatureCountIncrease = false
         this.sortAemberIncrease = false
         this.sortPodFraIncrease = this .sortPodFraIncrease ? false : true;
         if(this.sortPodFraIncrease) {
         this.podStore.pods.sort(function(a, b) {
           return a.podFraScore - b.podFraScore;
         });
         } else {
         this.podStore.pods.sort(function(a, b) {
           return b.podFraScore - a.podFraScore;
         });        
       }
     }
   }
}
</script>
<style scope>
   
</style>