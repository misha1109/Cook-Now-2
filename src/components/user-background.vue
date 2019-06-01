<template>
    <v-container ma-0 pa-0
    >
        <v-layout>
            <v-flex xs1></v-flex>
            <v-flex xs10>
                <v-card style="background-color: #FDD835; border-radius: 6%">
                    <v-container pa-0 ma-0 grid fluid text-xs-center>
                        <v-layout row wrap>
                            <v-flex  xs12>
                                <v-icon large>fas fa-users</v-icon>
                            </v-flex>
                            <slot></slot>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
            <v-flex xs1></v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    export default {
        name: "user-background.vue"
    }
</script>

<style scoped>

</style>