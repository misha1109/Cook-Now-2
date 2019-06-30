<template>
        <add-background>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-text-field
                                outline
                                hint="Enter recipe name"
                                background-color="white"
                                label="Name"
                                v-model="name"
                        >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field
                                outline
                                hint="Enter recipe publisher name or website"
                                background-color="white"
                                label="Recipe publisher"
                                v-model="publisher"
                        >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field
                                outline
                                hint="Enter full recipe url"
                                background-color="white"
                                label="Recipe url"
                                v-model="url"
                        >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field
                                outline
                                hint="Enter recipe image url"
                                background-color="white"
                                label="Image url"
                                v-model="imgUrl"
                        >
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <v-btn
                                v-on:click="showIngred"
                                round
                        >
                            Choose ingredients
                        </v-btn>
                    </v-flex>
                    <v-flex xs12>
                        <h4 style="color: red">
                            {{ errorMsg }}
                        </h4>
                    </v-flex>
                </v-layout>
            </v-container>
        </add-background>
</template>

<script>
    import addBack from './add-menu-background.vue'

    export default {
        name: "add-menu.vue",
        data: function () {
            return {
                ingredients : false,
                name : null,
                url : null,
                publisher : null,
                imgUrl : null,
                errorMsg : null
            }
        },

        methods : {
            showIngred : function () {
                if(this.name && this.url && this.publisher && this.imgUrl){
                    this.errorMsg = null
                    this.$emit('add-ingred', this.name , this.url , this.publisher , this.imgUrl)
                }

                else {
                    this.errorMsg = "Fill all fields"
                }
            },
        },

        components : {
            'add-background' : addBack
        }
    }
</script>

<style scoped>



</style>