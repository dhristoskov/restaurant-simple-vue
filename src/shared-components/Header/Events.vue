<template>
      <section class="events">
            <modal v-if='showEvent' :hideModal='eventOnShow'>
                <component :is="selectedComponent"></component>
             </modal>
            <p @click='eventOnShow("todaySpecial")'>Today<span> Events</span></p>
            <p @click='eventOnShow("upcomingEvent")'>Upcoming<span> Events</span></p>
        </section>
</template>

<script>
import TodaySpecial from '../TodaySpecial/TodaySpecial';
import Modal from '../../shared-components/Modal/Modal';
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';

export default {
    data() {
        return {
            showEvent: false,   
            selectedComponent: 'Default'    
        }
    },
    components: {
        todaySpecial: TodaySpecial,
        upcomingEvent: UpcomingEvent,
        modal: Modal
    },
    methods: {
        eventOnShow(value) {
            this.showEvent = !this.showEvent
             this.selectedComponent = value
        }
    }   
}
</script>

<style scoped lang="scss">
    .events {
        padding: 30px 20px;
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
        color: white;
        p {
            text-align: start;
            margin-left: 25px;
            cursor: pointer;
            span {
                display: block;
                text-transform: uppercase;
            }
        }
    }
</style>
