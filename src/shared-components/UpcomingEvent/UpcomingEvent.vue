<template>
    <div class="event-container">
        <p>Tomorrow from 12:00 to 18:00</p>
        <p>Our Cakes are 50% off</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .event-container {
        width: auto;
        height: 550px;
        background-image: url(../../assets/cake.jpg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        p {
            text-transform: uppercase;
            font-size: 22px;
            font-weight: 700;
            color: rgb(241, 250, 117);
        }
    }
</style>