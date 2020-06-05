<template>
    <div>
        <modal v-if='showMessage' :hideModal='showInfoMessage'>
            <h3 class="message">Your reservation has been sent</h3>
        </modal>
        <main class="reserve-page">
            <header>
                <header-main />
            </header>
            <div>
                <img src="../assets/reserve.jpg" alt="reserve">
            </div>
            <div>
                <reserveForm :showMsg='showInfoMessage'/>
            </div>
        </main>
    </div>
</template>

<script>
import HeaderMain from '../shared-components/Header/HeaderMain';
import ReserveForm from './components/ReserveForm';
import Modal from '../shared-components/Modal/Modal';

export default {
     data() {
        return {
            showMessage: false,     
        }
    },
    components: {
        headerMain: HeaderMain,
        reserveForm: ReserveForm,
        modal: Modal
    },
     methods: {
        showInfoMessage() {
            this.showMessage = !this.showMessage
        }
    }  
}
</script>

<style lang="scss" scoped>
    .message {
        text-align: center;
        margin: 20px 0;
    }
    .reserve-page {
        display: flex;
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }      
        div {
            flex-basis: 50%;
           img {
            position: fixed;
            top: 0;
            left: 0;
            width: 50%;
            height: 100vh;
            z-index: -1;
            }
        }
    }
</style>