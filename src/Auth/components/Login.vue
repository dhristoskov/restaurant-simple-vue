<template>
      <div class="auth-wrapper">
        <h4>Log-in</h4>
         <p class="subtitle">Enter your credentials to log-in</p>
        <form @submit.prevent="onSubmitHandler" class="auth-form">               
                <input type='email' id="email" name='email' placeholder='E-mail' 
                v-model.trim="userData.email" @blur="$v.userData.email.$touch()"
                :class='{invalide: $v.userData.email.$error}'/>
                <p class="error" v-if="!$v.userData.email.email">Invalide Email!</p>

                <div class="password-field">
                    <input :type='isHidden' id="password" name='password' placeholder='Password' 
                    v-model.trim="userData.password" @blur="$v.userData.password.$touch()"
                    :class='{invalide: $v.userData.password.$error}'/>    
                    <p class="hide-btn" @click.prevent="togglePassword">{{ btnLabel }}</p>                          
                </div>
                <p class="error" v-if="!$v.userData.password.minLength">Password must be at least 6 letters!</p>

                <input type='submit' :disabled='$v.$invalid' value="submit"/>                        
        </form>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
     mixins: [validationMixin],
     data() {
          return {
            isHidden: 'password',
            btnLabel: 'show',
            userData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        togglePassword() {
            this.isHidden = this.isHidden === 'password' ? 'text' : 'password';
            this.btnLabel = this.btnLabel === 'show' ? 'hide' : 'show'
        },
         onSubmitHandler(e){
            console.log(this.userData);
            e.target.reset();
            this.$router.push({name: 'Landing'})
        }
    },
    validations: {
        userData: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                }
        }
    }   
}
</script>

<style lang="scss" scoped>
    .auth-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        margin: 0 auto;
        width: 400px;
        h4 {
            text-align: center;
            font-size: 22px;
            text-transform: uppercase;
            font-weight: 600;
        }
        .subtitle {
            text-align: center;
            font-size: 18px;
            margin: 5px 0;
        }
        .auth-form {
            display: flex;
            flex-direction: column; 
            .invalide {
                background-color: rgb(255, 104, 104);
            }
            .error {
                color: rgb(245, 83, 83);
                font-weight: 600;
                font-size: 14px;
                margin-bottom: 3px;
            } 
            .password-field {
                position: relative;              
                input[type=text],
                input[type=password]{
                    width: 100%;
                }
                .hide-btn{
                    cursor: pointer;
                    position: absolute;
                    right: 5px;
                    bottom: 15px;
                }
            }       
            input[type=text],
            input[type=password],
            input[type=email]{
                padding: 20px 15px 5px 10px;
                margin-bottom: 10px;
                border: none;
                border-bottom: 1px solid black;
                outline: none;
            }
            input[type=submit]{
                margin-top: 20px;
                padding: 10px;
                outline: none;
                text-transform: uppercase;
                cursor: pointer;
                background-color: transparent;
                border: 1px solid black;
            }
    }
}
</style>