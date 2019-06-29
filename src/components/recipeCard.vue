<template>
    <v-container>
        <v-flex >
            <v-card
                    class="border"
                    tile max-width="70vw"
                    color="#ECEFF1"
            >
                <div v-if="userFavorite">
                    <v-btn v-on:click="userRemoveFav" flat round>
                        <v-icon color="red">fas fa-times</v-icon>
                    </v-btn>
                </div>
                <v-img
                        class="lgScreen"
                        :src="pic"
                        v-on:click="showWarn"
                ></v-img>
                <v-container ma-0 pa-0>
                    <v-flex>
                        <h3>{{title}}</h3>
                            <a style="text-decoration:none" :href="publisher_url">
                                <h4 >Publisher : {{publisher}}</h4>
                            </a>
                    </v-flex>
                    <v-divider light></v-divider>
                    <v-flex>
                        <v-btn
                                v-if="showFav"
                                v-on:click="addToFav"
                                round small
                        >
                            {{ favButton }}
                        </v-btn>
                        <v-rating half-increments dense :value=(rating+1)/20></v-rating>
                    </v-flex>
                </v-container>
                <v-divider light></v-divider>
                <v-container pa-0 ma-0>
                    <v-btn
                            v-on:click="showWarn"
                            round color="orange">Go to recipe</v-btn>
                </v-container>
                <v-slide-y-transition
                >
                    <v-container
                            v-show="show"
                            style="text-align: center;"
                    >
                        <v-card
                                color="#E1BEE7"
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
            </v-card>
        </v-flex>
    </v-container>

</template>

<script>
    import { addToFav,removeFavorite } from '../userAPI/userAPI.js'

    export default {
        name: "recipeCard.vue",
        data:function(){
            return {
                show:false,
                favButton : null
            }
        },
        props:{
            id : String,
            pic:String,
            title:String,
            url:String,
            rating:Number,
            publisher:String,
            publisher_url:String,
            showFav:Boolean,
            added : Boolean,
            logged:String,
            userFavorite: Boolean
        },

        methods:{
            showWarn(){
                this.show = !this.show
            },

            async addToFav(){
                if(this.logged){
                    if(this.favButton == 'Add to favorites') {
                        await addToFav({
                            email: this.logged,
                            favorite: {
                                publisher: this.publisher,
                                title: this.title,
                                source_url: this.url,
                                recipe_id: this.id,
                                image_url: this.pic,
                                social_rank: this.rating,
                                publisher_url: this.publisher_url
                            }
                        })
                        this.favButton = 'Remove from favorites'
                        this.$emit('fav-message','Recipe added to your favorites')
                    }

                    else{
                        await removeFavorite( this.logged , this.id)
                        this.favButton = 'Add to favorites'
                        this.$emit('fav-message','Recipe removed from favorites')
                    }
                }

                else{
                    this.$emit('fav-message','Login to add recipes')
                }

            },

            filterFav(){
                if(this.added){
                    this.favButton  = 'Remove from favorites'
                }
                else{
                    this.favButton  = 'Add to favorites'
                }
            },

            userRemoveFav(){
                this.$emit('remove-user-fav',this.id)
            }
        },

        beforeMount() {
            this.filterFav()
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