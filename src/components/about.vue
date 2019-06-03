<template>
    <v-container ma-0 pa-0 >
        <v-layout row >
            <v-flex xs1></v-flex>
            <v-flex xs10>
                <v-card>
                <v-container pa-0 ma-0 text-xs-center>
                    <v-layout column >
                        <v-flex xs12>
                            <v-card>
                            <v-img
                                    src='https://cupofjo.com/wp-content/uploads/2019/04/mealsgrid.jpeg'
                            >
                            </v-img>
                            </v-card>
                        </v-flex>
                        <v-flex xs12>
                            <v-card
                                    style="padding-bottom: 10vh"
                            >
                                <cook-now></cook-now>
                                <v-card-title
                                        primary-title
                                        class="text"
                                >
                                    Cook-Now 2 allows you to find cooking recipes from different websites and publication by choosing which ingredient the recipe must contain.
                                    <br>
                                    Create your user account to rate and save recipes to your favorites.
                                    <br>
                                    All recipes are obtained using food2fork api.
                                </v-card-title>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
                </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    import cookLogo from './cook-now-logo.vue'

    export default {
        name: 'about.vue',
        components:{
            'cook-now':cookLogo
        },

    }
</script>

<style scoped>
    .text{
        font-size: large ;
        font-family:Arial;
    }
</style>