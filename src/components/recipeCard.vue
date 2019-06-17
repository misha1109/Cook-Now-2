<template>
            <v-flex xs12>
                <v-card
                        class="border"
                        tile
                        color="#FFF59D"
                        style="text-align: center; left:10vw; right:10vw;"
                        width="70vw"
                >
                    <v-img
                            contain
                            :src="pic"
                    ></v-img>

                    <v-card-title primary-title style="text-align: center">
                        <div>
                            <h3 class="mb-0">{{title}}</h3>
                        </div>
                    </v-card-title>
                    <v-divider light></v-divider>
                    <v-card-text style="text-align: center">
                        <a style="text-decoration:none" :href="publisher_url">
                            <h4 >Publisher : {{publisher}}</h4>
                        </a>
                    </v-card-text>
                    <v-divider light></v-divider>
                    <v-card-actions>
                        <v-btn
                                v-on:click="showWarn"
                                class="button"  flat color="orange">Go to recipe</v-btn>
                        <v-rating half-increments dense :value=(rating+1)/20></v-rating>
                    </v-card-actions>
                </v-card>
                <div
                        style="text-align: center;"
                        pa-0 ma-0
                >
                    <v-alert
                            color="warning"
                            class="alert "
                            :value="show"
                            transition="v-scale-transition"
                    >
                        You are about to proceed to '{{ publisher }}' website
                        <br>
                        <v-btn
                                target="_blank"
                                :href="url"
                                flat
                                class="alertBtn"
                        >
                            Click to agree
                        </v-btn>
                        <br>
                        <v-icon
                                v-on:click="showWarn"
                                xs4>fas fa-times
                        </v-icon>
                    </v-alert>
                </div>
            </v-flex>


</template>

<script>
    import toPub from './toPublisherWarning.vue'

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
        components:{
            'to-pub-warning':toPub
        },

        methods:{
            showWarn(){
                this.show = !this.show
            }
        }
    }
</script>

<style scoped>
    .border{
        border-radius: 25px;
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
    }
</style>