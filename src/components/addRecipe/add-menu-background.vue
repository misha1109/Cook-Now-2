<template>
    <v-container ma-0 pa-0 pt-3 text-xs-center
    >
        <v-layout row wrap>
            <v-flex lg6 xs12>
                <v-container pb-5>
                    <v-card round class="card" color="#90CAF9">
                    <slot></slot>
                </v-card>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "add-menu-background.vue"
    }
</script>

<style scoped>
    .card{
        border-radius: 15px;
    }
</style>