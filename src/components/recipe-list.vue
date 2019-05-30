<template>
    <v-container v-if="recipes" fluid grid-list-lg>
        <v-layout row wrap>
            <div v-for="recipe in recipes.recipes" v-bind:key="recipe.recipe_id">
                <recipe-card
                        :publisher_url="recipe.publisher_url" :publisher="recipe.publisher" :rating="recipe.social_rank" :url="recipe.source_url" :pic="recipe.image_url" :title="recipe.title">
                </recipe-card>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "recipe-list.vue",
        props:{
            recipes:[]
        }
    }
</script>

<style scoped>

</style>