<template>
    <user-background>
            <v-flex xs12 px-3>
                <slot></slot>
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
            <v-flex xs12>
                <v-btn color="white" round>Sign in</v-btn>
            </v-flex>
            <v-flex >
                <v-btn v-on:click="newAcc" flat >Don't have an account? Sign up</v-btn>
            </v-flex>
    </user-background>
</template>

<script>
    import userBack from './user-background.vue'

    export default {
        name: "user-main.vue",
        data:function () {
            return {
                email:null,
                pass:null
            }
        },
        components:{
            'user-background':userBack
        },
        methods:{
            newAcc:function() {
                this.$emit('new-user')
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