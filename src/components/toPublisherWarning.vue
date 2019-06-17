<template>
    <v-alert
            :value="show"
            type="warning"
    >
        You are about to proceed to {{ publisher }} website.
        <v-btn>
            Click if you agree
        </v-btn>
    </v-alert>
</template>

<script>
    export default {
        name: "toPublisherWarning",
        props:{
            publisher:String,
            show:Boolean,
            url: String
        }
    }
</script>

<style scoped>

</style>