<template>
    <v-container pa-0 ma-0 grid-list-xs text-xs-center>
        <v-layout row wrap>
            <v-flex xs4 pa-0 ma-0  v-for="i in ingredList" :key="i" >
                <v-btn color='#FDD835' active-class="#FFB300" round>{{ i }}</v-btn>
            </v-flex >
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "ingredient-topic-grid.vue",
        data:function(){
            return {
                def:'#FDD835',
            }
        },
        props:{
            ingredList:Array,
        },
        methods: {
            setActive: function () {
                this.active = this.active == '#FDD835' ? '#FFB300' : '#FDD835'
            }
        }
    }
</script>

<style scoped>
    .button{
        color:#FDD835;
    }
    .button:active{
        color:#FFB300;
    }
</style>