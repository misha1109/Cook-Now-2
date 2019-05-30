<template>
    <v-card>
        <v-snackbar
                v-model="show"
                color="pink"
                flat
                :timeout=2000
                top
                auto-height

        >
            {{ text }}
        </v-snackbar>
    </v-card>
</template>

<script>
    export default {
        name: "ingred-snackbar.vue",
        data:function(){
            return {
                show:false
            }
        },
        props:{
            showMsg:Boolean,
            text:String,
        },
        updated() {
            this.show = this.showMsg
        }
    }
</script>

<style scoped>

</style>