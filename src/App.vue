<template>
    <v-app >
        <v-content class="backGround">
            <nav-bar v-on:changeToHome="changePage" :title="title">
            </nav-bar>
            <br>
            <div v-if="title=='Home'">
            <v-container ma-0 pa-0 fluid text-xs-center>
                <v-layout row wrap>
                    <main-button v-on:changePage="changePage" page="Recipe List" text="All recipes">
                    </main-button>
                    <main-button v-on:changePage="changePage" page="Choose ingredients" text="Choose by ingredients">
                    </main-button>
                    <main-button text="Add recipe">
                    </main-button>
                </v-layout>
            </v-container>
            </div>
            <v-container ma-0 py-5 fluid v-if="title=='Recipe List'">
                <v-layout row wrap>
                    <recipe-search v-if="recipeFreeSeach" v-on:search-recipe="findRecipes">
                    </recipe-search>
                <v-container v-if="recipes" fluid grid-list-lg ma-2>
                <v-layout row wrap>
                    <div v-for="recipe in recipes.recipes" v-bind:key="recipe.recipe_id">
                        <recipe-card :publisher_url="recipe.publisher_url" :publisher="recipe.publisher" :rating="recipe.social_rank" :url="recipe.source_url" :pic="recipe.image_url" :title="recipe.title">
                        </recipe-card>
                    </div>
                </v-layout>
                </v-container>
                </v-layout>
            </v-container>
            <v-container ma-0 py-5 v-if="title=='Choose ingredients'">
                <ingredients-main v-on:final-ingred-added = "findRecipes" v-on:changePage="changePage">
                </ingredients-main>
            </v-container>
            <bottom-nav>
            </bottom-nav>
        </v-content>
    </v-app>
</template>

<script>
import mainButton from './components/main-page.vue'
import navBar from './components/nav-bar.vue'
import bottomNavBar from './components/botton-nav.vue'
import recipeSearch from './components/recipeSearch.vue'
import recipeCard from './components/recipeCard.vue'
import food2fork from './foodAPI/food2forkAgent,js'
import ingredMain from './components/ingredients-main.vue'
import recipeList from './components/recipe-list.vue'

export default {
  name: 'app',
  data :function() {
      return{
          title:"Home",
          recipes:null,
          recipeFreeSeach:true
      }
  },
  components: {
      'main-button':mainButton,
      'nav-bar':navBar,
      'bottom-nav':bottomNavBar,
      'recipe-search':recipeSearch,
      'recipe-card':recipeCard,
      'ingredients-main':ingredMain,
      'recipe-list':recipeList
  },
  methods: {
      changePage: function (newPage,hideSearch) {
          if (newPage == 'Home') {
              this.recipes = null
          }
          if(hideSearch){
              this.recipeFreeSeach = false
          }
          else
              this.recipeFreeSeach = true
          this.title = newPage
      },
      findRecipes: async function (ingred) {
          this.recipes = await food2fork(ingred)
      }
  }
}
</script>
<style>
    .backGround{
        background-size: 100vw 100vh;
        background:repeat;
        background-image: url("https://i.pinimg.com/originals/12/ec/f3/12ecf3434967abb127cc639735fdc8dd.jpg");
    }
</style>

