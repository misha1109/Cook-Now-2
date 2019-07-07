<template>
    <user-background>
        <v-container v-if="loading">
            <loading></loading>
        </v-container>
        <v-container v-else
            text-xs-center pa-0 ma-0
        >
            <div
                    v-if="logged"
            >
                <v-container
                    text-xs-center
                >
                        <user-logged
                            :email = "logged"
                            v-on:sign-out="signout"
                        >
                        </user-logged>
                </v-container>
            </div>
            <div v-else>
                <v-flex>
                    <slot></slot>
                    <v-container pa-0 ma-0 >
                        <v-layout row wrap>
                            <v-flex xs1></v-flex>
                            <v-flex xs10>
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
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex xs12>
                    <v-btn v-on:click="login" color="white" round>Sign in</v-btn>
                </v-flex>
                <v-flex>
                    <v-btn v-on:click="newAcc" flat >Don't have an account? Sign up</v-btn>
                </v-flex>
            </div>
            <div
                    v-if="errMsg">
                <v-flex xs12 pa-2 ma-2
                >
                    <h4 style="text-align: center; color:red">{{ errMsg }}</h4>
                </v-flex>
            </div>
        </v-container>
    </user-background>
</template>

<script>
    import userBack from './user-background.vue'
    import userLogged from './user-logged-menu.vue'
    import loading from '../main/loading.vue'
    import { login } from '../../userAPI/userAPI.js'

    export default {
        name: "user-main.vue",
        data:function () {
            return {
                email:null,
                pass:null,
                errMsg: null,
                loading : null
            }
        },
        props:{
            logged : String
        },

        components:{
            'user-background':userBack,
            'user-logged': userLogged,
            'loading' : loading
        },

        methods:{
            newAcc:function() {
                this.$emit('new-user')
            },

            login:function(){
                this.loading = true
                const email = this.email
                login( email, this.pass).then( res => {
                    if(res.message == "Auth successful"){
                        this.$emit('login-success',res.token,  email )
                        this.errMsg = null
                        this.loading = null
                    }
                    else{
                        this.errMsg = res.message
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