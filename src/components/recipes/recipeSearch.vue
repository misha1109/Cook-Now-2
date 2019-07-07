<template>
    <v-flex xs12 pa-0 ma-0
            style="top:5vh;"

    >
        <v-text-field
                class="search"
                large
                placeholder="Search for recipes by name"
                outline
                style="background-color: white;"
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
        width:100%;

    }

    /*@media only screen and (min-width: 1000px) {*/
    /*    .search{*/
    /*        margin-left: 110px;*/
    /*    }*/
    /*}*/

</style>