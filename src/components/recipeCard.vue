<template>
            <v-flex xs12>
                <v-card
                        class="border"
                        tile max-width="70vw"
                        color="#ECEFF1"
                >
                    <v-img
                            class="lgScreen"
                            :src="pic"
                            v-on:click="showWarn"
                    ></v-img>
                    <v-container ma-0 pa-0>
                        <v-card-text style="text-align: center">
                                <h3 class="mb-0">{{title}}</h3>
                        </v-card-text>
                        <v-rating half-increments dense :value=(rating+1)/20></v-rating>
                    </v-container>
                    <v-divider light></v-divider>
                    <v-card-text style="text-align: center">
                        <a style="text-decoration:none" :href="publisher_url">
                            <h4 >Publisher : {{publisher}}</h4>
                        </a>
                    </v-card-text>
                    <v-divider light></v-divider>
                    <v-container pa-0 ma-0>
                        <v-btn
                                v-on:click="showWarn"
                                class="button"  flat color="orange">Go to recipe</v-btn>
                    </v-container>
                </v-card>
                <v-slide-y-transition
                >
                <v-container
                        v-show="show"
                        style="text-align: center;"
                >
                    <v-card
                            color="warning"
                            class="alert "
                    >
                        <v-layout row wrap>
                            <v-flex xs2 pb-0 pt-1>
                                <v-icon
                                        color="red"
                                        v-on:click="showWarn"
                                >fas fa-times
                                </v-icon>
                            </v-flex>
                        </v-layout>
                        <h4>
                            You are about to proceed to '{{ publisher }}' website
                        </h4>
                        <v-btn
                                color = "#FFFFFF"
                                target="_blank"
                                :href="url"
                                flat
                                class="alertBtn"
                                v-on:click="showWarn"
                        >
                            Click to agree
                        </v-btn>
                    </v-card>
                </v-container>
                </v-slide-y-transition>
            </v-flex>
</template>

<script>

    export default {
        name: "recipeCard.vue",
        data:function(){
            return {
                show:false
            }
        },
        props:{
            pic:String,
            title:String,
            url:String,
            rating:Number,
            publisher:String,
            publisher_url:String,
        },

        methods:{
            showWarn(){
                this.show = !this.show
            },
        }
    }
</script>

<style scoped>
    .lgScreen{
        max-height: 40vh;
    }

    .border{
        border-radius: 25px;
        border-color: blue;
        border-width: 30px;
        text-align: center;
        left:10vw;
        right:10vw;
    }
    .button{
        font-size: medium;
        background-color: #FFFDE7;

        border-radius: 25px;
        /*opacity: 0.5;*/
    }

    .alert{
        font-size: medium;
        border-radius: 10%;
    }

    .alertBtn{
        width: 35vw;
        font-size: small;
        border-radius: 20%;
        border-color: blue;
        border-width: 30px;
    }
</style>