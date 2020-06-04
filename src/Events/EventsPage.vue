<template>
    <div class="offers-page">
        <header>
            <header-main />
        </header>
        <h2>Offers Page</h2>
    </div>
</template>

<script>
import HeaderMain from '../shared-components/Header/HeaderMain';

export default {
    components: {
        headerMain: HeaderMain
    }
}
</script>

<style lang="scss" scoped>
.offers-page {
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }   
}
</style>