<template>
    <v-flex xs12 pa-0 ma-0
        style="background-color: white;"
    >
        <v-text-field
                style="top:5vh;"
                class="search"
                full-width
                large
                placeholder="Search for recipes by name"
                outline
                background-color="#F44336"
                clearable
                v-model="query"
                :append-outer-icon="query ? 'fa-search' : ''"
                @click:append-outer="click"
        >
        </v-text-field>
    </v-flex>

</template>

<script>
    export default {
        name: "recipe-list.vue",
        data(){
            return {
                query:""
            }
        },
        methods:{
            click(){
                let ingred = this.query.split(" ")
                this.$emit('search-recipe',ingred)
            }
        }
    }
</script>

<style scoped>
    .search{
        font-size:x-large;
        font-family: "Britannic Bold";
    }
</style>