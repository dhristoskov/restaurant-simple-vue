<template>
    <div class="reserve-wrapper">
        <h4>Reservation</h4>
        <p class="subtitle">You can make a reservation by filling out the form below,
            Please note that reservations are only confirmed once we check availability.</p>
        <form @submit.prevent="onSubmitHandler">
            <div>
                <p class="info-text">Pick your Date and Time</p>
                <input type='datetime-local' id="date" name='date' v-model="reserveData.data"/>
            </div>
            <div class='input-fields'>
                <p class="info-text">Reservation Details</p>

                <input type='text' id="name" name='name' placeholder='Name' 
                v-model="reserveData.name" @blur="$v.reserveData.name.$touch()"
                :class='{invalide: $v.reserveData.name.$error}'/>
                <p class="error" v-if="!$v.reserveData.name.minLength">Name must be at least 3 letters!</p>

                <input type='email' id="email" name='email' placeholder='E-mail' 
                v-model.trim="reserveData.email" @blur="$v.reserveData.email.$touch()"
                :class='{invalide: $v.reserveData.email.$error}'/>
                <p class="error" v-if="!$v.reserveData.email.email">Invalide Email!</p>

                <input type='text' id="phone" name='phone' placeholder='Phone' 
                v-model.number="reserveData.phone" @blur="$v.reserveData.email.$touch()"
                :class='{invalide: $v.reserveData.phone.$error}'/>
                <p class="error" v-if="!$v.reserveData.phone.integer">Phone must be number!</p>

                <textarea type='text' id="msg" name='msg' rows="5" placeholder='Message'
                 v-model="reserveData.msg"/>
                <input type='submit' :disabled='$v.$invalid' value="submit"/>
            </div>
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email, integer } from 'vuelidate/lib/validators';

export default {
    props: ['showMsg'],
    mixins: [validationMixin],
    data() {
          return {
            reserveData: {
                data: '',
                name: '',
                email: '',
                phone: '',
                msg: ''
            }
        }
    },
    methods: {
        onSubmitHandler(e){
            console.log(this.reserveData);
            e.target.reset();
            this.showMsg()
        }
    },
    validations: {
        reserveData: {
            name: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            phone: {
                required,
                integer
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .reserve-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 120px auto 0 auto;
        width: 400px;
        h4 {
            text-align: start;
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 600;
        }
        .subtitle {
            text-align: start;
            font-size: 18px;
            margin: 5px 0;
        }
        form {
            .info-text{
                text-transform: uppercase;
                font-size: 14px;
                font-weight: 600;
                margin: 10px 0;
            }
            .invalide {
                background-color: rgb(255, 104, 104);
            }
            .error {
                color: rgb(245, 83, 83);
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 3px;
            }
            .input-fields {
                display: flex;
                flex-direction: column;              
                input[type=text],
                input[type=email]{
                    padding: 20px 15px 5px 10px;
                    margin-bottom: 5px;
                    border: none;
                    border-bottom: 1px solid black;
                    outline: none;
                }
                textarea {
                    padding: 5px 10px;
                    resize: vertical;
                    max-height: 80px;
                    margin: 10px 0;
                }
                input[type=submit]{
                    padding: 10px;
                    outline: none;
                    width: 25%;
                    text-transform: uppercase;
                    cursor: pointer;
                    background-color: transparent;
                    border: 1px solid black;
                }
            }
        }
    }
</style>