<template>
    <ul>
        <day v-for="day in dayEvents" :day='day' :key="day.id"/>
    </ul>
</template>

<script>
import DayOfferItem from './components/DayOfferItem';
import { events } from '../../shared-components/data';

export default {
    data() {
        return {
            dayEvents: events
        }
    },
    components: {
        day: DayOfferItem
    }
}
</script>

<style lang="scss" scoped>
    ul {
        padding: 10px;
    }
</style>
