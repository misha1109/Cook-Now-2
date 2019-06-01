<template>
    <v-flex px-4 pt-0>
        <v-container  class="text-xs-center">
            <v-card
                    v-on:click="click"
                    color="#FFB300"
                    style="border-radius: 18px"
            >
                <v-card-text >
                    <h3 >Find Recipes</h3>
                </v-card-text>
            </v-card>
        </v-container>
    </v-flex>
</template>

<script>
    export default {
        name: "search-chosen-btn.vue",
        methods:{
            click:function () {
                this.$emit('search-chosen')
            }
        }
    }
</script>

<style scoped>

</style>