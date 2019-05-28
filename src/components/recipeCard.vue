<template>
        <v-flex xs12 sm6 offset-sm3>
            <v-card
                    class="border"
                    tile
                    color="#FFF59D"
                    hover
                    width="80vw"
            >
                <v-img
                        contain
                        :src="pic"
                ></v-img>

                <v-card-title primary-title style="text-align: center">
                    <div>
                        <h3 class="headline mb-0">{{title}}</h3>
                    </div>
                </v-card-title>
                <v-divider light></v-divider>
                <v-card-text style="text-align: center">
                    <a style="text-decoration:none" :href="publisher_url">
                        <h3>Publisher : {{publisher}}</h3>
                    </a>
                </v-card-text>
                <v-divider light></v-divider>
                <v-card-actions>
                    <v-btn class="button" :href="url" flat color="orange">Go to recipe</v-btn>
                    <v-rating half-increments dense :value=(rating+1)/20></v-rating>
                </v-card-actions>
            </v-card>
        </v-flex>


</template>

<script>
    export default {
        name: "recipeCard.vue",
        props:{
            pic:String,
            title:String,
            url:String,
            rating:Number,
            publisher:String,
            publisher_url:String
        }
    }
</script>

<style scoped>
    .border{
        border-radius: 25px;
    }
    .button{
        font-size: larger;
        background-color: #FFFDE7;

        border-radius: 25px;
        /*opacity: 0.5;*/
    }
</style>