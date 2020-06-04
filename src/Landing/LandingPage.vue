<template>
    <div class="landing">
        <header>
            <header-main />
        </header>
        <upper-header />
        <img src="../assets/Landing.jpg" alt="background-img">
        <events />
    </div>
</template>

<script>
import UpperHeader from '../shared-components/Header/UpperHeader';
import Events from '../shared-components/Header/Events';
import HeaderMain from '../shared-components/Header/HeaderMain';

export default {  
    components: {
        headerMain: HeaderMain,
        upperHeader: UpperHeader,
        events: Events
    }  
}
</script>

<style scoped lang='scss'>
    .landing {
        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        header {
            position: fixed;
            top: 70%;
            left: 0;
            width: 100%;
        }
        img {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: -1;
        }
    }
</style>