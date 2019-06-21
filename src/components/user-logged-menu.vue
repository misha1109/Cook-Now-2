<template>
        <v-container
        >
            <v-flex xs12>
                <v-card-title
                >
                    <h4
                            style="text-align: center"
                    >
                        Welcome {{ email }}
                    </h4>
                </v-card-title>
                <v-btn
                        round
                        v-on:click="signout"
                >Sign out</v-btn>
            </v-flex>
        </v-container>
</template>

<script>
    export default {
        name: "user-logged-menu.vue",
        data:function(){
            return {

            }
        },

        props:{
            email: String
        },

        methods:{
            signout : function () {
                this.$emit('sign-out')
            }
        }
    }
</script>

<style scoped>

</style>