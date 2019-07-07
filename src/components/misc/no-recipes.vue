<template>
    <v-container
            justify-center
            ma-0 fluid text-xs-center>
        <v-layout>
            <v-flex lg3 xs1 md3 sm3></v-flex>
            <v-flex lg6 xs10 md6 sm6
            >
                <v-card
                        class="text-xs-center text"
                        v-on:click="back"
                        style="border-radius: 18px;top:15vh;"
                        color="#FDD835"
                >
                    <v-card-text text-xs-center>
                        <slot></slot>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex lg3s xs1 md3 sm3></v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        name: "no-recipes.vue",
        methods:{
            back:function(){
                this.$emit('back')
            }
        },
    }
</script>

<style scoped>
    .text{
        font-size: 3vh ;
        font-family: Arial;
    }
</style>