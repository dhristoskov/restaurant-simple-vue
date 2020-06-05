<template>
    <div>
        <p class="name">{{item.name}}<span>{{item.price}} €</span></p>
        <p class="info">{{item.note}}</p>
    </div>
</template>

<script>
    export default {
        props: [ 'item' ]
    }
</script>

<style scoped lang="scss">
    .name {
        color: rgb(8, 19, 99);
        font-weight: 700;
        font-size: 18px;
        margin-bottom: 3px;
        span {
            margin-left: 7px;
            font-weight: 500;
             font-size: 15px;           
        }
    }
    .info {
         margin-bottom: 15px;
         font-weight: 600;
    }
</style>