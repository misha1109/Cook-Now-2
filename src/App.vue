<template>
    <v-app >
        <v-content class="backGround">
        <nav-bar
                v-show="tab == 'Main'"
                v-on:changeToHome="changePage"
                v-on:back = "back"
                :title="title">
        </nav-bar>
            <br>
            <v-scale-transition
                    hide-on-leave
            >
                <v-flex v-show="title=='Home'"
                >
                    <v-container
                            justify-center

                            ma-0 pa-0 fluid text-xs-center>
                        <v-layout column wrap>
                            <v-flex xs11>
                                <cook-now-logo
                                        height="22vh"
                                        v-on:changeTab="changeTab"
                                ></cook-now-logo>
                                <main-button v-on:changePage="changePage" page="Recipe List" text="search All recipes">
                                </main-button>
                                <main-button v-on:changePage="changePage" page="Choose ingredients" text="Choose by ingredients">
                                </main-button>
                                <main-button v-on:changePage="changePage" page="Add" text="Add recipe">
                                </main-button>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-scale-transition>
            <v-scale-transition
                    hide-on-leave
            >
                <v-flex v-if="tab=='About'"
                        v-on:click="changeTab('Main')"
                >
                    <about
                    ></about>
                </v-flex>
            </v-scale-transition>
            <v-scale-transition
                    hide-on-leave
            >
            <v-flex v-show="tab == 'User'">
                <div>
                    <v-scale-transition
                            hide-on-leave
                    >
                    <user-main
                            v-if="this.title=='User Main'"
                            v-on:new-user="changePage('New User')"
                            v-on:login-success = "loginSuccess"
                            v-on:login-failed = "loginFailed"
                            v-on:sign-out = "signOut"
                            :logged="signedIn"
                    >
                    </user-main>
                    </v-scale-transition>
                    <v-scale-transition
                            hide-on-leave
                    >
                    <user-new
                            v-if="this.title=='New User'"
                            v-on:back-sign-in="changePage('User Main')"
                            v-on:login-success="loginSuccess"
                    >
                    </user-new>
                    </v-scale-transition>
                </div>
            </v-flex>
            </v-scale-transition>
            <v-scale-transition
                    hide-on-leave
            >
                    <div v-show="title=='Add'">
                        <div v-show="!signedIn" v-on:click="changeTab('User')">
                                <no-recipe >
                                    <p>Sign in to add recipes</p>
                                </no-recipe>
                        </div>
                    </div>
            </v-scale-transition>
            <v-scale-transition
                    hide-on-leave
            >
                    <v-container ma-0 py-0 fluid v-if="title=='Recipe List'">
                        <recipe-search v-show="recipeFreeSeach" v-on:search-recipe="findRecipes">
                        </recipe-search>
                        <v-layout row wrap>
                            <div
                                    v-show="loading"
                                    class="text-xs-center"
                            >
                                <loading></loading>
                            </div>
                            <v-container ma-0 pa-0 py-5 v-if="recipes" fluid grid-list-lg>
                                <v-layout column wrap>
                                    <v-scale-transition
                                        group
                                        hide-on-leave

                                    >
                                    <div v-for="recipe in recipes.recipes" v-bind:key="recipe.recipe_id">
                                        <div>
                                        <recipe-card :publisher_url="recipe.publisher_url" :publisher="recipe.publisher" :rating="recipe.social_rank" :url="recipe.source_url" :pic="recipe.image_url" :title="recipe.title">
                                        </recipe-card>
                                        </div>
                                    </div>
                                    </v-scale-transition>
                                </v-layout>
                            </v-container>
                            <div v-show="noRecipes" v-on:click="back">
                                <no-recipe>
                                    No recipes found
                                    <br>
                                    Choose different ingredients
                                </no-recipe>
                            </div>
                            <div v-show="apiLimit" v-on:click="changePage('Home')">
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
                    hide-on-leave
            >
                <v-container ma-0 py-5 v-if="title=='Choose ingredients'">
                    <ingredients-main v-on:final-ingred-added = "findRecipes" v-on:changePage="changePage">
                    </ingredients-main>
                </v-container>
            </v-scale-transition>
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
import about from './components/about.vue'
import userMain from './components/user-main.vue'
import userNew from './components/user-new.vue'
import cookLogo from './components/cook-now-logo.vue'
import { verifyToken, signUp } from './userAPI/userAPI.js'
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
          loginFailedShow : false
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
      'about':about,
      'user-main':userMain,
      'user-new':userNew,
      'cook-now-logo':cookLogo

  },

  beforeMount(){
      this.userCookie()
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
          this.recipes = null
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
          this.tab = tab
          switch (tab) {
              case 'Main':
                  document.getElementById("main-button").click();
                  this.changePage("Home")
                  break;
              case 'User':
                  document.getElementById("user-button").click();
                  this.changePage("User Main")
                  break;
              case 'About':
                  document.getElementById("about-button").click();
                  this.changePage('About')
                  break;
          }
      },

      loginSuccess : function( token, email){
          window.localStorage.setItem("userCookieToken", token)
          window.localStorage.setItem("userCookieEmail", email)
          this.signedIn = email
          this.title = 'User Main'
      },

      loginFailed : function(){
            this.loginFailedShow = true
      },

      signOut : function(){
          window.localStorage.removeItem('userCookieToken');
          this.signedIn = null
      },

      userCookie : async function(){
          try {
              let token = window.localStorage.getItem('userCookieToken')
              if(token){
                  let result = await verifyToken(token)
                  if(result.message == 'Token valid'){
                      this.signedIn = window.localStorage.getItem('userCookieEmail')
                  }
              }
          }
          catch (e) {
              return 'error'
          }
      }

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
</style>

