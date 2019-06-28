<template>
        <v-container text-xs-center>
                <v-layout row wrap>
                        <v-flex lg8></v-flex>
                        <v-flex xs12 lg1>
                                <v-progress-circular
                                        :width="10"
                                        indeterminate
                                        color="purple"
                                        :size="100"
                                ></v-progress-circular>
                        </v-flex>
                        <v-flex lg3></v-flex>
                </v-layout>
        </v-container>
</template>

<script>
    export default {
        name: "loading.vue"
    }
</script>

<style scoped>

</style>