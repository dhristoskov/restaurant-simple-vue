<template>   
    <section class="navigation">     
        <router-link to='/' tag='h2'>Logo</router-link >           
        <navigation-component />
    </section>       
</template>

<script>
    import Navigation from './Navigation';

    export default {
        components: {
            navigationComponent: Navigation,
        }
}
</script>

<style scoped lang='scss'>
    .navigation{
        display: flex;
        align-items: center;
        padding: 35px 20px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        background-color: rgba(255, 255, 255, .95); 
        box-shadow: 0px 3px 10px 1px #000000;
        color: black;   
        h2 {
            cursor: pointer;
        }   
    }  
</style>