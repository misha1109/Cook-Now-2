<template>
    <v-layout>
        <v-flex xs1></v-flex>
        <v-flex xs10>
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
    </v-layout>


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
        font-family: "Times New Roman";
    }
</style>