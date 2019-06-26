<template>
<div>
    <v-container
            text-xs-center
            color="grey lighten-4"
    >
    <v-toolbar
            dense
            fixed
            >
        <v-layout row wrap>
            <v-flex xs2 lg3>
                <v-btn
                        v-on:click="back"
                        icon class="iconbgc" round>
                    <v-icon color="white">
                        fas fa-chevron-left
                    </v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs8 lg6 pt-2
                    text-xs-center>
                <h3 >{{ title }}</h3>
            </v-flex>
<!--            <v-flex xs2></v-flex>-->
            <v-flex xs2 lg3>
                <v-btn
                    v-on:click="home"    icon class="iconbgc" round>
                    <v-icon color="white">fas fa-home
                    </v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-toolbar>
    </v-container>
</div>
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
            },
            back(){
                this.$emit('back')
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
        font-size: medium;
    }
    .top{
        position:sticky;
        top:0;
    }
</style>