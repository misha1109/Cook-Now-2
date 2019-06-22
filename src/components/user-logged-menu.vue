<template>
        <v-container
        >
            <v-flex v-if="!showAdd && !showFav" xs12>
                <v-container
                    text-xs-center text
                >
                    <h3>Welcome</h3>
                    <h4
                    >
                        {{ email }}
                    </h4>
                </v-container>
                <v-flex row wrap xs12>
                    <v-btn
                            v-on:click="favClick"
                            class="btns" color="#90CAF9" xs6
                    >
                        <v-layout row wrap>
                        <v-flex xs12>
                            <v-icon >
                                fas fa-star
                            </v-icon>
                            <h4>
                                Favorites
                            </h4>
                        </v-flex>
                        </v-layout>
                    </v-btn>
                    <v-btn class="btns" color="#90CAF9" xs6
                    >
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-icon >
                                    fas fa-plus
                                </v-icon>
                                <h4>
                                    Added
                                </h4>
                            </v-flex>
                        </v-layout>
                    </v-btn>
                </v-flex>
                <br>
                <v-btn
                        small
                        round
                        v-on:click="signout"
                >Sign out</v-btn>
            </v-flex>
            <v-flex
                v-if="showFav"
            >
                <v-container
                        fluid grid-list-sm
                >
                    <v-layout column wrap>

                    <v-flex
                            v-for="recipe in mockedFav.recipes" v-bind:key="recipe.recipe_id">
                        <recipe-card
                                :publisher_url="recipe.publisher_url" :publisher="recipe.publisher" :rating="recipe.social_rank" :url="recipe.source_url" :pic="recipe.image_url" :title="recipe.title">
                        </recipe-card>
                    </v-flex>
                    </v-layout>

                </v-container>
            </v-flex>
        </v-container>
</template>

<script>
    import recipeCard from './recipeCard.vue'
    import mockRecipes from "../mockRecipes.js";

    export default {
        name: "user-logged-menu.vue",
        data:function(){
            return {
                showFav : false,
                showAdd : false,
                mockedFav : mockRecipes
            }
        },

        props:{
            email: String
        },

        components:{
            'recipe-card' : recipeCard
        },

        methods:{
            signout : function () {
                this.$emit('sign-out')
            },

            favClick : function() {
                this.showFav = true
            }
        }
    }
</script>

<style scoped>
    .btns{
        width: 20vw;
        height: 8vh;
        border-radius: 15%;
        color: #FAFAFA;
    }
</style>