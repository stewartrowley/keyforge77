<template>
    <div class="card-gallery-container">
        <div v-for="card, index in this.$props.cards" :key="index" class="card-gallery-box" :style="this.handleStyle(card)" :id="'card' + index" @mouseover="this.handleHover(card, index)" @mouseleave="this.handleLeave(card, index)">
            <img class="card-gallery-image" :src="card.imageUri" >
            <!-- <div v-if="card.isOwn === false" class="card-gallery-non-own">
                <h1 >{{ card.title }}</h1>
                <p v-for="text, num in card.effectDescription" :key="num">{{ text }}</p>
            </div> -->
        </div>
    </div>
</template>
<script>
import gsap from 'gsap';
export default {
    props: ["cards"],
    methods: {
        handleStyle (card) {
            if (card.isOwn) {
                return {

                }
            } else {
                return {
                    'filter': 'grayscale(100%)'
                }
            }
        },
       handleHover (card, index) {
        console.log(card)
        const id = '#card' + index
        if (card.isOwn) {
            gsap.to(id, {
                
            })
        } else {
            gsap.to(id, {
                'filter': 'grayscale(0%)'
            })
        }
       },
       handleLeave (card, index) {
        const id = '#card' + index;
        if (card.isOwn) {
            gsap.to(id, {

            })
        } else {
            gsap.to(id, {
                'filter': 'grayscale(100%)'
            })
        }
       }
    }
}
</script>
<style scoped>
.card-gallery-container {
    margin: 2rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.card-gallery-image {
    width: 100%;
} 
.card-gallery-box {
    position: relative;
}
.card-gallery-non-own {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>