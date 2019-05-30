<template>
    <v-scale-transition
            leave-absolute
    >
        <div
                v-if="show == title"
                class="d-flex  transparent darken-2  white--text"
                style="transition-duration: 700ms"
        >
            <slot>
            </slot>
        </div>
    </v-scale-transition>
</template>

<script>
    export default {
        name: "transitions-menu.vue",
        props:{
            show:String,
            title:String
        }
    }
</script>

<style scoped>

</style>