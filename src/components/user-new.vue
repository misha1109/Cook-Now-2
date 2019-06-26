<template>
    <user-background>
        <v-flex
        >
            <div
            >
                <v-flex xs3>
                    <v-btn v-on:click="signIn" round small color="white">Sign in</v-btn>
                </v-flex>
                <v-flex xs9></v-flex>
                <v-card-title>Fill required fields and create your account</v-card-title>
                <v-flex xs12 px-3>
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
                    <v-text-field
                            hint="Enter password again"
                            background-color="white"
                            type="password"
                            label="Confirm Password"  v-model="confPass">
                    </v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-btn color="white" round
                           v-on:click="signUpClick"
                    >Sign Up</v-btn>
                </v-flex>
            </div>
            <div
                v-if="errMsg">
                <v-flex xs12 pa-2 ma-2
                >
                    <h4 style="text-align: center; color:red">{{ errMsg }}</h4>
                </v-flex>
            </div>
        </v-flex>

    </user-background>
</template>

<script>
    import userBack from './user-background.vue'
    import { signUp, login } from '../userAPI/userAPI.js'

    export default {

        name: "user-new.vue",
        data:function () {
            return {
                email:null,
                pass:null,
                confPass:null,
                errMsg:null
            }
        },
        components:{
            'user-background':userBack
        },
        methods:{
            signIn:function () {
                this.$emit('back-sign-in')
            },

            showErr : function( err){
                this.errMsg = err
            },

            loginNew : async function(){
                const success = await login( this.email, this.pass).then( res => {
                    if(res.message == "Auth successful"){
                        return res
                        // this.$emit('login-success',res.token)
                    }
                    else{
                        return false
                        // this.$emit('login-failed',res.message)
                    }
                })
                return success
            },

            signUpClick:async function () {
                if(this.pass == null || this.confPass == null || this.email == null){
                    this.showErr('Fill all required fields')
                }

                else if( this.pass == this.confPass){
                    const msg = await signUp( this.email, this.pass).then( res => {
                        if(res.message != 'Sign up error')
                        {
                            try{
                                return this.loginNew().then( res => {
                                    if(res.message == "Auth successful"){
                                        return res
                                    }
                                    else{
                                        return 'Login error'
                                    }
                                })
                            }
                            catch(err){
                                return 'Unrecognized error'
                            }
                        }
                        else {
                            return 'Enter valid email'
                        }
                    })

                    if(msg.token){
                        this.$emit('login-success',msg.token,this.email)
                    }
                    else{
                        this.showErr(msg)
                    }
                }

                else{
                    this.showErr("Passwords don't match")
                }
            }
        }

    }
</script>

<style scoped>

</style>