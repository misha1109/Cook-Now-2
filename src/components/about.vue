<template>
    <v-container ma-0 pa-0 >
        <v-layout row wrap>
            <v-flex xs1></v-flex>
            <v-flex xs10>
                <v-card

                        class="text-xs-center text"
                        style="border-radius:40px;"
                        color="#FDD835"
                >
                    <v-img
                            max-height="40vh"
                            src='https://cupofjo.com/wp-content/uploads/2019/04/mealsgrid.jpeg'
                    >

                    </v-img>
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
            <v-flex xs1></v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    export default {
        name: 'about.vue',
    }
</script>

<style scoped>
    .text{
        font-size: medium ;
        font-family:Bold;
    }
</style>