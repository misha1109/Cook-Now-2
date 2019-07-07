<template>
        <v-card>
            <v-snackbar
                    color="pink"
                    flat
                    :timeout=2000
                    top
                    auto-height
            >
                {{ text }}
            </v-snackbar>
        </v-card>
</template>

<script>
    export default {
        name: "fav-snackbar.vue",
        props:{
            text : String
        }
    }
</script>

<style scoped>

</style>