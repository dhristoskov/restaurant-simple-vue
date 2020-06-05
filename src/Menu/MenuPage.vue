<template>
    <div class="menu-page">
        <header>
            <header-main />
        </header>
        <img src='../assets/cafe.jpg' alt="cafe-img">
        <ul>
            <item v-for="item in menu" :item='item' :key='item.id'/>
        </ul>
    </div>
</template>

<script>
import MenuItem from './componenrs/MenuItem';
import HeaderMain from '../shared-components/Header/HeaderMain';
import { menu } from '../shared-components/data';

export default {
    data() {
        return {
            menu: menu
        }
    },
    components: {
        item: MenuItem,
        headerMain: HeaderMain,
    }
}
</script>

<style lang="scss" scoped>
    .menu-page {
        display: flex;
        height: 100vh;  
        justify-content: flex-start;  
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }   
        img {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        ul {
            background-color:rgba($color: #FFF, $alpha: .45);
            flex: 0 0 50%;
            padding-top: 150px;
            text-align: center;
        }
    }
</style>