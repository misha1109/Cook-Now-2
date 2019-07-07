<template>
    <v-img
            v-on:click="click"
            contain
            style="top:5vh; "
            :height="height"
            :src=img
    ></v-img>
</template>

<script>
    export default {
        name: "cook-now-logo.vue",
        data:function () {
            return {
                img:null
            }
        },
        props:{
            height: String
        },
        methods:{
            click:function () {
                this.$emit('changeTab','About')
            }
        },
        created() {
            this.img = require('../../../public/chef_logo.png')
        }
    }
</script>

<style scoped>

</style>