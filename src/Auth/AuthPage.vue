<template>
    <div class="auth-page">
        <header>
            <header-main />
        </header>
        <div class="left-img"> 
            <img src="../assets/muffin.jpg" alt="muffin">          
        </div>
        <div class="right-auth">
            <div class="auth-btn">
                <button v-if="selectedComponent === 'register'" 
                @click="selectedComponent = 'login'">Move to Login</button>
                <button v-else @click="selectedComponent = 'register'">Move to Registration</button>
            </div>
            <transition name="slide" mode="out-in">
                <component  class="component" :is="selectedComponent"></component> 
            </transition>
        </div>       
    </div>
</template>

<script>
import HeaderMain from '../shared-components/Header/HeaderMain';
import Register from './components/Register';
import Login from './components/Login';

export default {
    data() {
        return {
            selectedComponent: 'login'    
        }
    },
    components: {
        headerMain: HeaderMain,
        register: Register,
        login: Login
    }
}
</script>

<style lang="scss" scoped>
    .auth-page {
        display: flex;
        .left-img{
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
        .right-auth{
            flex-basis: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .auth-btn{
               margin: 150px 0 50px 0;
               text-align: center;
               button {
                   cursor: pointer;
                   background: none;
                   border: 1px solid black;
                   padding: 5px 20px;
                   outline: none;
               }
            }          
            .slide-enter-active {
            animation: slide-in 300ms ease-out forwards;
            }
            .slide-leave-active {
            animation: slide-out 300ms ease-out forwards;
            }
            @keyframes slide-in {
                from {
                    transform: translateY(-50px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            @keyframes slide-out {
                from {
                    transform: translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateY(-50px);
                    opacity: 0;
                }
            }
        }
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }   
    }  
</style>