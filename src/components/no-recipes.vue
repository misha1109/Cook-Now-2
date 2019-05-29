<template>
    <v-card
            class="text-xs-center text"
            v-on:click="back"
            style="border-radius: 18px;height: 34vh; width: 70vw; left:11vw; top:15vh"
            color="#FDD835"
    >
        <v-card-text>
            No recipes found
            <br>
            Add more ingredients
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "no-recipes.vue",
        methods:{
            back:function(){
                this.$emit('back')
            }
        }
    }
</script>

<style scoped>
    .text{
        font-size: 5vh ;
        font-family: "Times New Roman";
    }
</style>