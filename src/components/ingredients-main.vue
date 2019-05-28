<template>
    <v-container grid-list-xl>
        <v-layout column xs12>
            <v-flex>
                <ingredients-topic
                        title="Meat & Fish"
                        :list="ingredients.meat"
                >
                    <v-icon xs4>fas fa-drumstick-bite
                    </v-icon>
                    <span style="font-size: large">&</span>
                    <v-icon xs4>fas fa-fish
                    </v-icon>
                </ingredients-topic>
            </v-flex>
            <v-flex>
                <ingredients-topic title="Vegetables"
                    :list="ingredients.vegetable"
                >
                    <v-icon xs12>fas fa-carrot
                    </v-icon>
                </ingredients-topic>
            </v-flex>
            <v-flex>
                <ingredients-topic title="Fruit"
                   :list="ingredients.fruits"
                >
                    <v-icon xs4>fas fa-apple-alt
                    </v-icon>
                </ingredients-topic>
            </v-flex>
            <v-flex>
                <ingredients-topic title="Dairy & Baking">
                    <v-icon xs4>fas fa-cheese
                    </v-icon>
                    <span style="font-size: large">&</span>
                    <v-icon xs4>fas fa-bread-slice
                    </v-icon>
                </ingredients-topic>
            </v-flex>
            <v-flex>
                <ingredients-topic title="Spices & Sauces">
                    <v-icon xs4>fas fa-mortar-pestle
                    </v-icon>
                    <span style="font-size: large">&</span>
                    <v-icon xs4>fas fa-tint
                    </v-icon>
                </ingredients-topic>
            </v-flex>
            <search-chosen-ingred v-on:search-chosen="searchChosen"></search-chosen-ingred>
        </v-layout>
    </v-container>
</template>

<script>
    import ingredTopic from "./ingredients-topic.vue"
    import ingreNames from '../assets/ingredNames.js'
    import {eventBus} from '../main.js'
    import searchChosen from'./search-chosen-btn'

    export default {
        name: "ingredients-main.vue",
        data:function(){
            return {
                ingredients: ingreNames,
                ingredChosen:[]
            }
        },
        methods:{
            searchChosen:function () {
                this.$emit('changePage','Recipe List',true)
                this.$emit('final-ingred-added',this.ingredChosen)
            }
        },
        components:{
            'ingredients-topic':ingredTopic,
            'search-chosen-ingred':searchChosen
        },
        created(){
            eventBus.$on('ingredAdded',(ingred) => {
                this.ingredChosen.push(ingred)
            })
        }
    }
</script>

<style scoped>

</style>