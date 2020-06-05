<template>
        <nav>
            <router-link to='/menu' tag='li'>Menu</router-link>
            <router-link to='/reserve' tag='li'>Reservation</router-link>
        </nav>
</template>

<style scoped lang="scss">
    nav {
        justify-content: space-around;
        display: flex;
        margin-left: auto;
        li {
            margin-left: 15px;
            list-style: none;
            text-transform: uppercase;
            font-size: 14px;
            cursor: pointer;
        }
    }
</style>
