<template>
    <v-container ma-0 pa-0 >
        <v-layout row >
            <v-flex xs1></v-flex>
            <v-flex xs10>
                <v-container pa-0 ma-0 text-xs-center>
                    <v-layout column >
                        <v-card light
                            style="border-radius: 30px"
                        >
                        <v-card xs12>
                            <v-img
                                    aspect-ratio="2"
                                    height="28vh"
                                    :transition=false
                                    src='https://cupofjo.com/wp-content/uploads/2019/04/mealsgrid.jpeg'
                            >
                            </v-img>
                        </v-card>
                        <v-flex xs12
                        >
                            <v-card
                            >
                                <cook-now
                                    height="20vh"
                                ></cook-now>
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
                        </v-card>
                    </v-layout>
                </v-container>
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
        font-size: medium ;
        font-family:Arial;
    }
</style>