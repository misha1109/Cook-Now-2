<template>
        <v-container
        >
            <div v-if="!showAdd && !showFav">
                <v-container
                    py-0
                >
                    <v-layout row wrap>
                        <v-flex
                                xs6 py-3
                                text-xs-center text
                            >
                                <h3>Welcome</h3>
                                <h4
                                >
                                    {{ email }}
                                </h4>

                        </v-flex>
                        <v-flex
                                xs6 py-2
                        >
                            <v-layout
                                    row wrap
                            >
                                <v-flex xs12>
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
                                </v-flex>
                                <v-flex xs12>
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
                            </v-layout>
                        </v-flex>
                        <v-flex
                                ma-0 pt-2
                        >
                            <v-btn
                                    round
                                    v-on:click="signout"
                            >Sign out
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
                <br>
            </div>
            <v-scale-transition
                hide-on-leave
            >
                <v-container
                        v-if="showFav"
                        grid-list-sm text-xs-center text
                >
                    <v-btn
                            style="position: sticky" round
                            v-on:click="back"
                    >Back</v-btn>
                    <v-layout row wrap>
                        <v-flex
                                v-for="recipe in favorites" v-bind:key="recipe.recipe_id">
                            <recipe-card
                                    v-on:remove-user-fav="removeFavorite"
                                    userFavorite="" :publisher_url="recipe.publisher_url" :publisher="recipe.publisher" :rating="recipe.social_rank" :url="recipe.source_url" :pic="recipe.image_url" :title="recipe.title" :id="recipe.recipe_id">
                            </recipe-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-scale-transition>
        </v-container>
</template>

<script>
    import recipeCard from './recipeCard.vue'
    import { getFavorites, removeFavorite } from '../userAPI/userAPI.js'
    import mockRecipes from "../mockRecipes.js";

    export default {
        name: "user-logged-menu.vue",
        data:function(){
            return {
                showFav : false,
                showAdd : false,
                favorites : null
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

            favClick : async function() {
                this.favorites = await getFavorites(this.email)
                if(this.favorites.message != 'No favorites')
                    this.favorites = this.favorites.message
                else
                    this.favorites = null
                this.showFav = true
            },

            back : function(){
                this.showFav = null
            },

            removeFavorite : async function(id){
                await removeFavorite(this.email, id)
                await this.favClick()
            }
        },

    }
</script>

<style scoped>
    .btns{
        height: 8vh;
        border-radius: 15%;
        color: #FAFAFA;
    }
</style>