<template>
    <v-app >
        <v-content class="backGround">
            <nav-bar
                     v-if="tab == 'Main'"
                     v-on:changeToHome="changePage"
                     v-on:back = "back"
                     :title="title">
            </nav-bar>
            <br>
            <trans-menu
                :show="tab"
                title="Main"
            >
                <div v-if="title=='Home'">
                    <v-container ma-0 pa-0 fluid text-xs-center>
                        <v-layout column wrap>
                            <cook-now-logo></cook-now-logo>
                            <main-button v-on:changePage="changePage" page="Recipe List" text="search All recipes">
                            </main-button>
                            <main-button v-on:changePage="changePage" page="Choose ingredients" text="Choose by ingredients">
                            </main-button>
                            <main-button v-on:changePage="changePage" page="Add" text="Add recipe">
                            </main-button>
                        </v-layout>
                    </v-container>
                </div>
                <v-scale-transition
                        leave-absolute
                >
                    <div v-if="title=='Add'">
                        <div v-if="!signedIn" v-on:click="changeTab('User')">
                            <v-slide-y-transition
                                    hide-on-leave
                            >
                                <no-recipe >
                                    <p>Sign in to add recipes</p>
                                </no-recipe>
                            </v-slide-y-transition>
                        </div>
                    </div>
                </v-scale-transition>
                <v-scale-transition
                        leave-absolute
                >
                    <v-container ma-0 py-0 fluid v-if="title=='Recipe List'">
                        <v-layout row wrap>
                            <recipe-search v-if="recipeFreeSeach" v-on:search-recipe="findRecipes">
                            </recipe-search>
                            <div
                                    v-if="loading"
                                    class="text-xs-center"
                            >
                                <loading></loading>
                            </div>
                            <v-scale-transition
                                    leave-absolute
                            >
                            <v-container ma-0 pa-0 py-5 v-if="recipes" fluid grid-list-lg>
                                <v-layout column wrap>
                                    <div v-for="recipe in recipes.recipes" v-bind:key="recipe.recipe_id">
                                        <recipe-card :publisher_url="recipe.publisher_url" :publisher="recipe.publisher" :rating="recipe.social_rank" :url="recipe.source_url" :pic="recipe.image_url" :title="recipe.title">
                                        </recipe-card>
                                    </div>
                                </v-layout>
                            </v-container>
                            </v-scale-transition>
                            <div v-if="noRecipes" v-on:click="back">
                                <no-recipe>
                                    No recipes found
                                    <br>
                                    Choose different ingredients
                                </no-recipe>
                            </div>
                            <div v-if="apiLimit" v-on:click="changePage('Home')">
                                <no-recipe>
                                    Api limit reached
                                    <br>
                                    Try again later
                                </no-recipe>
                            </div>
                        </v-layout>
                    </v-container>
                </v-scale-transition>

                <v-scale-transition
                        class="d-flex  transparent darken-2  white--text"
                    leave-absolute
                >
                <v-container ma-0 py-5 v-if="title=='Choose ingredients'">
                    <ingredients-main v-on:final-ingred-added = "findRecipes" v-on:changePage="changePage">
                    </ingredients-main>
                </v-container>
                </v-scale-transition>

            </trans-menu>
            <trans-menu
                    leave-absolute
                    title="User"
                    :show="tab"
            >
                <div v-if="!signedIn">
                    <v-slide-y-transition
                            hide-on-leave
                    >
                        <user-main v-if="this.title=='User Main'" v-on:new-user="changePage('New User')" >
                        </user-main>
                    </v-slide-y-transition>
                    <v-slide-y-transition
                            hide-on-leave

                    >
                        <user-new v-on:back-sign-in="changePage('User Main')" v-if="this.title=='New User'"></user-new>
                    </v-slide-y-transition>
                </div>
            </trans-menu>
            <trans-menu
                title="About"
                :show="tab"
            >
                <about></about>
            </trans-menu>
            <bottom-nav
            v-on:change-tab="changeTab"
            >
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
import loading from './components/loading.vue'
import noRecipe from './components/no-recipes.vue'
import transMenu from './components/transitions-menu.vue'
import about from './components/about.vue'
import userMain from './components/user-main.vue'
import userNew from './components/user-new.vue'
import cookLogo from './components/cook-now-logo.vue'
import { eventBus } from './main.js'
import mockRecipes from "./mockRecipes.js";


export default {
  name: 'app',
  data :function() {
      return{
          title:"Home",
          prevTitle:"Home",
          recipes:null,
          recipeFreeSeach:true,
          loading:false,
          noRecipes:false,
          tab:'Main',
          apiLimit:false,
          signedIn:null,
      }
  },
  components: {
      'main-button':mainButton,
      'nav-bar':navBar,
      'bottom-nav':bottomNavBar,
      'recipe-search':recipeSearch,
      'recipe-card':recipeCard,
      'ingredients-main':ingredMain,
      'loading':loading,
      'no-recipe':noRecipe,
      'trans-menu':transMenu,
      'about':about,
      'user-main':userMain,
      'user-new':userNew,
      'cook-now-logo':cookLogo

  },
  methods: {
      changePage: function (newPage,hideSearch) {
          switch (newPage) {
              case'Home':
                  this.recipes = null
                  this.prevTitle = "Home"
                  this.recipeFreeSeach = true
                  eventBus.$emit('resetChosen')
                  break;
              case 'Recipe List':
                  if(hideSearch){
                      this.prevTitle = "Choose ingredients"
                  }
                  else
                      this.prevTitle="Home"
                  this.recipes = []
                  this.noRecipes = false
                  break;
              case 'Choose ingredients':
                  this.prevTitle = "Home"
                  break;
          }

          if(hideSearch){
              this.recipeFreeSeach = false
          }
          else
              this.recipeFreeSeach = true
          this.title = newPage
          this.noRecipes = false
          this.apiLimit = false
          window.scrollTo(0,0)

      },
      back:function(){
          if(this.prevTitle == 'Choose ingredients'){
              this.changePage(this.prevTitle,1)
          }
          else
              this.changePage(this.prevTitle)
      },
      findRecipes: async function (ingred) {
          this.loading = true
          this.recipes = await food2fork(ingred)
          if(this.recipes.count==0){
              this.noRecipes = true
          }
          else if(this.recipes.error=='limit'){
              this.apiLimit = true
          }
          this.loading = false
          // this.recipes = mockRecipes
      },
      changeTab:function(tab){
          window.scrollTo(0,0)
          this.tab = tab
          switch (tab) {
              case 'Main':
                  this.changePage("Home")
                  break;
              case 'User':
                  document.getElementById("user-button").click();
                  this.changePage("User Main")
          }
      },
  }
}
</script>
<style>
    .backGround{
        background-image: url("https://i.pinimg.com/originals/12/ec/f3/12ecf3434967abb127cc639735fdc8dd.jpg");
        background-attachment: fixed;
        background-position: top; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .chefLogo{
        background-image: url("../public/chef_logo.png");
        background-attachment: fixed;
        background-position: top;
        background-size: contain;
        background-color: red;
    }
</style>

