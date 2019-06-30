<template>
    <div>
    <ingred-snackbar
            :text="snackMsg"
            :showMsg="msgToSnack"
    >
    </ingred-snackbar>
    <v-container pa-0 ma-0 grid-list-md
    >
        <v-layout>
            <v-flex lg2></v-flex>
            <v-flex lg8 xs12>
            <v-layout column wrap>
                <v-flex xs10>
                    <ingredients-topic
                            title="Meat & Fish"
                            :list="ingredients.meat"
                            display="display-2"
                    >
                        <v-icon xs4>fas fa-drumstick-bite
                        </v-icon>
                        <span style="font-size: large">&</span>
                        <v-icon xs4>fas fa-fish
                        </v-icon>
                    </ingredients-topic>
                </v-flex>
                <v-flex xs1>
                    <ingredients-topic title="Vegetables"
                                       :list="ingredients.vegetable"
                                       display="display-2"

                    >
                        <v-icon >fas fa-carrot
                        </v-icon>
                    </ingredients-topic>
                </v-flex>
                <v-flex>
                    <ingredients-topic title="Fruit"
                                       :list="ingredients.fruits"
                                       display="display-2"
                    >
                        <v-icon >fas fa-apple-alt
                        </v-icon>
                    </ingredients-topic>
                </v-flex>
                <v-flex>
                    <ingredients-topic title="Dairy & Baking"
                                       :list="ingredients.dairyBaking"
                                       display="display-2"
                    >
                        <v-icon xs4>fas fa-cheese
                        </v-icon>
                        <span style="font-size: large">&</span>
                        <v-icon xs4>fas fa-bread-slice
                        </v-icon>
                    </ingredients-topic>
                </v-flex>
                <v-flex>
                    <ingredients-topic title="Spices & Sauces"
                                       :list="ingredients.spiceSauce"
                                       display="display-2"
                    >
                        <v-icon xs4>fas fa-mortar-pestle
                        </v-icon>
                        <span style="font-size: large">&</span>
                        <v-icon xs4>fas fa-tint
                        </v-icon>
                    </ingredients-topic>
                </v-flex>
                <v-flex pb-4 v-if="!ingredForNew">
                    <search-chosen-ingred v-on:search-chosen="searchChosen"></search-chosen-ingred>
                </v-flex>
                <v-flex v-else>
                    <v-btn
                            v-on:click="addRecipe"
                            round>
                        Finish and upload
                    </v-btn>
                </v-flex>
            </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
    import ingredTopic from "./ingredients-topic.vue"
    import ingreNames from '../assets/ingredNames.js'
    import {eventBus} from '../main.js'
    import searchChosen from'./search-chosen-btn'
    import ingredSnackbar from './ingred-snackbar.vue'

    export default {
        name: "ingredients-main.vue",
        data:function(){
            return {
                ingredients: ingreNames,
                ingredChosen:[],
                snackMsg:null,
                msgToSnack:false,
            }
        },

        props : {
            ingredForNew : Boolean
        },

        methods:{
            searchChosen:function () {
                this.$emit('changePage','Recipe List',true)
                this.$emit('final-ingred-added',this.ingredChosen)
            },

            addRecipe : function(){
                this.$emit('add-new-recipe',this.ingredChosen)
            },

            addIngred:async function(ingred){
                let found = this.ingredChosen.findIndex( el => {
                    return el === ingred
                })
                if(found!=-1){
                    this.ingredChosen.splice(found,1)
                    this.snackMsg = `${ingred} Removed`
                }
                else{
                    this.ingredChosen.push(ingred)
                    this.snackMsg = `${ingred} Added`
                }
                this.msgToSnack = true
                setTimeout( () => {
                    this.msgToSnack = false
                },0)
            }
        },
        components:{
            'ingredients-topic':ingredTopic,
            'search-chosen-ingred':searchChosen,
            'ingred-snackbar':ingredSnackbar
        },
        created(){
            eventBus.$on('ingredAdded',(ingred) => {
                this.addIngred(ingred)
            })
            eventBus.$on('resetChosen', () => {
                this.ingredChosen = []
            })
        },
    }
</script>

<style scoped>

</style>