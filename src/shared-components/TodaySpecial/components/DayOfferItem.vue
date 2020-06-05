<template>
    <div class="event-wrapper">
        <h3 class="day-container">{{day.day}} <span @click="onInfoShow"> +</span></h3>
        <div v-if='showInfo'>
            <p class="add-info">{{ day.first_offer.product }} - only {{ day.first_offer.price }} €</p>
            <p class="add-info">{{ day.second_offer.product }} - only {{ day.second_offer.price }} €</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['day'],
    data (){
        return {
            showInfo: false
        }
    },
    methods: {
        onInfoShow() {
            this.showInfo = !this.showInfo 
        }
    }
}
</script>

<style lang="scss" scoped>
    .event-wrapper{
        margin: auto;
        .day-container{
            position: relative;
            margin-top: 10px;
            border: 1px solid black;
            color: black;
            background-color: rgb(18, 227, 235);
            padding: 5px 0;
            text-align: center;
            width: 100%;
            span {
                cursor: pointer;
                font-size: 24px;
                font-weight: 700;
                position: absolute;
                right: 10px;
                bottom: 2px;
            }
        }
        .add-info{
            padding: 3px 5px;
            border-bottom:1px solid black;
            color: black;
            margin: 10px 0;
            font-size: 16px;
        }
    }
</style>
