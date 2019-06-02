<template>
    <v-container pa-0 ma-0 grid-list-xs text-xs-center>
        <v-layout row wrap>
            <v-flex xs4 pa-0 ma-0  v-for="i in ingredList" :key="i" >
                <ingred-button
                        class="text"
                        :ingred="i"></ingred-button>
            </v-flex >
        </v-layout>
    </v-container>
</template>

<script>
    import ingredButton from './ingred-button.vue'
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
        },
        components:{
            'ingred-button':ingredButton
        }
    }
</script>

<style scoped>
    .text{

    }
    .button{
        color:#FDD835;
    }
    .button:active{
        color:#FFB300;
    }
</style>