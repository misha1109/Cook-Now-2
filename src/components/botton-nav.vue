<template>
            <v-bottom-nav
                    class="bottom"
                    dark
                    color="deep-orange lighten-1"
            >
                <v-btn dark>
                    <span>Favorites</span>
                    <v-icon>fas fa-star</v-icon>
                </v-btn>
                <v-btn dark>
                    <span>Profile</span>
                    <v-icon>fas fa-user-circle</v-icon>
                </v-btn>
                <v-btn dark>
                    <span>About</span>
                    <v-icon>fas fa-info-circle</v-icon>
                </v-btn>
            </v-bottom-nav>
</template>

<script>
    export default {
        name: "botton-nav.vue"
    }
</script>

<style scoped>
    .bottom{
        position:fixed;
        height: 58px;
        bottom: 58px;
    }
</style>