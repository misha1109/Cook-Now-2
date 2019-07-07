<template>
    <v-btn
            v-on:click="changeTab"
            dark>
        <span>{{ title }}</span>
        <slot>
        </slot>
    </v-btn>
</template>

<script>
import {eventBus} from "../../main";

export default {
    name: "bottom-nav-btn.vue",
    props:{
        title:String,
    },
    methods:{
        changeTab:function(){
            this.$emit('change-tab',this.title)
        }
    }
}
</script>

<style scoped>

</style>