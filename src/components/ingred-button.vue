<template>
    <v-btn
            flat v-on:click="changeActive" :color="activeStatus">{{ ingred }}</v-btn>
</template>

<script>
    import {eventBus} from '../main.js'
    export default {
        name: "ingred-button.vue",
        data:function () {
            return {
                activeStatus:'white'
            }
        },
        props:{
            ingred:String
        },
        methods:{
            changeActive:function(){
                this.activeStatus = this.activeStatus=='white'? 'black' :'white'
                eventBus.$emit('ingredAdded',this.ingred)
            }
        },
    }
</script>

<style scoped>

</style>