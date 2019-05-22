<template>
    <v-footer class="round"
            height="auto"
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
                <v-btn icon class="iconbgc" round>
                    <v-icon color="white">fas fa-home
                    </v-icon>
                </v-btn>
            </v-flex>
    </v-footer>
</template>

<script>
    export default{
        name:"navBar",
        props:{
            title:String
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
</style>