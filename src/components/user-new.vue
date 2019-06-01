<template>
    <user-background>
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
                            label="Password"  v-model="pass">
                    </v-text-field>
                    <v-text-field
                            hint="Enter password again"
                            background-color="white"
                            label="Confirm Password"  v-model="confPass">
                    </v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-btn color="white" round>Sign Up</v-btn>
                </v-flex>
    </user-background>
</template>

<script>
    import userBack from './user-background.vue'

    export default {
        name: "user-new.vue",
        data:function () {
            return {
                email:null,
                pass:null,
                confPass:null
            }
        },
        components:{
            'user-background':userBack
        },
        methods:{
            signIn:function () {
                this.$emit('back-sign-in')
            }
        }

    }
</script>

<style scoped>

</style>