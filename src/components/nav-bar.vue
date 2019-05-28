<template>
    <v-toolbar class="round"
            dense
            fixed
               color="deep-orange lighten-1">
        <v-flex pb-2 xs3 px-3>
                <v-btn icon class="iconbgc" round>
                    <v-icon color="white">
                        fas fa-angle-double-left
                    </v-icon>
                </v-btn>
            </v-flex>
            <v-flex text-xs-center xs6>
                <h2 class="title">{{ title }}</h2>
            </v-flex>
            <v-flex pb-2 xs3 px-4>
                <v-btn
                    v-on:click="home"    icon class="iconbgc" round>
                    <v-icon color="white">fas fa-home
                    </v-icon>
                </v-btn>
            </v-flex>
    </v-toolbar>
</template>

<script>
    export default{
        name:"navBar",
        props:{
            title:String
        },
        methods:{
            home(){
                this.$emit('changeToHome','Home')
            }
        }
    }
</script>
<style scoped>
    .iconbgc{
        background-color: #FFAB40;
        opacitiy:0.4;
    }
    .round{
        border-bottom-left-radius: 60%;
        border-bottom-right-radius: 60%;
    }
    .title{
        font-family: "Times New Roman";
        font-size: large;
    }
    .top{
        position:sticky;
        top:0;
    }
</style>