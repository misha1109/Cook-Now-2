<template>
        <v-flex>
            <v-card
                    center-text-xs
                    style="border-radius: 18px"
                    :color="active"
            >
                <v-card-text row class="text-xs-center"s>
                    <v-container  grid-list-xs
                                  v-on:click="animate"
                    >
                        <v-layout row wrap>
                            <v-flex >
                                <slot>
                                </slot>
                            </v-flex >
                        </v-layout>
                    </v-container>
                    <h3 >{{ title }}</h3>
                </v-card-text>
                <v-expand-transition>
                    <v-card
                            v-if="show"
                            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
                            :class="display"
                    >
                        <ingredient-topic-grid
                                :ingredList="list"
                        >
                        </ingredient-topic-grid>
                    </v-card>
                </v-expand-transition>
            </v-card>
        </v-flex>
</template>

<script>
    import ingredTopGrid from './ingredient-topic-grid.vue'
    export default {
        name: "ingredients-topic.vue",
        data:function(){
            return {
                show:false,
                active:'#FDD835',
            }
        },
        props:{
            title:String,
            list:Array,
            display:String
        },
        methods:{
            animate:function(){
                this.show=!this.show
                this.active = this.show==true? '#FFB300' :'#FDD835'
            }
        },
        components:{
            'ingredient-topic-grid':ingredTopGrid
        },

    }
</script>

<style scoped>
</style>