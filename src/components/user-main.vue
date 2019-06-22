<template>
    <user-background>
        <v-flex xs12 px-3>
            <div
                    v-if="logged"
            >
                <v-flex xs12>
                        <user-logged
                            :email = "logged"
                            v-on:sign-out="signout"
                        >
                        </user-logged>
                </v-flex>
            </div>
            <div v-else>
                <v-flex>
                    <slot></slot>
                    <div >
                        <v-text-field
                                hint="Enter your email"
                                background-color="white"
                                label="Email"  v-model="email">

                        </v-text-field>
                        <v-text-field
                                hint="Enter your password"
                                background-color="white"
                                type="password"
                                label="Password"  v-model="pass">
                        </v-text-field>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-btn v-on:click="login" color="white" round>Sign in</v-btn>
                </v-flex>
                <v-flex >
                    <v-btn v-on:click="newAcc" flat >Don't have an account? Sign up</v-btn>
                </v-flex>
            </div>
        </v-flex>
    </user-background>
</template>

<script>
    import userBack from './user-background.vue'
    import userLogged from './user-logged-menu.vue'
    import { login } from '../userAPI/userAPI.js'

    export default {
        name: "user-main.vue",
        data:function () {
            return {
                email:null,
                pass:null
            }
        },
        props:{
            logged : String
        },

        components:{
            'user-background':userBack,
            'user-logged': userLogged
        },

        methods:{
            newAcc:function() {
                this.$emit('new-user')
            },

            login:function(){
                const email = this.email
                login( email, this.pass).then( res => {
                    if(res.message == "Auth successful"){
                        this.$emit('login-success',res.token,  email )
                    }
                    else{
                        this.$emit('login-failed',res.message)
                    }
                })
            },

            signout : function () {
                this.$emit('sign-out')
            },

            signUp:function () {

            }
        }
    }
</script>

<style scoped>
    .text{
        font-family: "Times New Roman";
        font-size: 20px;
    }
</style>