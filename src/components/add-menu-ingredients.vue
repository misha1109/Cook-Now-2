<template>
    <v-scale-transition>
        <add-background>
            <v-container
                    text-xs-center pb-0
            >
                <div
                >
                    <ingred-menu
                        ingredForNew=""
                        v-on:add-new-recipe="addNewRecipe"
                    >
                    </ingred-menu>
                </div>
            </v-container>
        </add-background>
    </v-scale-transition>
</template>

<script>

    import addBack from './add-menu-background.vue'
    import  ingredMain from './ingredients-main.vue'

    export default {
        name: "add-menu-ingredients.vue",

        methods : {
            back : function(){
            },

            addNewRecipe : function (ingred) {
                this.$emit('add-new-recipe',ingred)
            }
        },

        components : {
            'ingred-menu' : ingredMain,
            'add-background' : addBack
        }
    }
</script>

<style scoped>

</style>