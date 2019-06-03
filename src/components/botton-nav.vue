<template>
    <v-card>
        <v-bottom-nav
                mandatory=""
                class="bottom"
                dark
                color="#FFAB40"
        >
            <bottom-btn
                    id="main-button"
                    v-on:change-tab="changeTab"
                    title="Main">
                <v-icon>fas fa-utensils</v-icon>
            </bottom-btn>
            <bottom-btn
                    id="user-button"
                    v-on:change-tab="changeTab"
                    title="User">
                <v-icon>fas fa-user-circle</v-icon>
            </bottom-btn>
            <bottom-btn
                    id="about-button"
                    v-on:change-tab="changeTab"
                    title="About">
                <v-icon>fas fa-info-circle</v-icon>
            </bottom-btn>
            <v-expand-transition>
                <v-card
                        v-if="bottomBtn===2"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
                >
                    1234
                </v-card>
            </v-expand-transition>
        </v-bottom-nav>
    </v-card>
</template>

<script>
    import bottomBtn from './bottom-nav-btn.vue'

    export default {
        name: "botton-nav.vue",
        data:function(){
            return {
                bottomBtn:null,
            }
        },
        components:{
            'bottom-btn':bottomBtn
        },
        methods:{
            changeTab:function(tab){
                this.$emit('change-tab',tab)
            }
        }
    }
</script>

<style scoped>
    .bottom{
        position:fixed;
        height: 58px;
        bottom: 58px;
    }
</style>