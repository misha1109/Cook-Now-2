<template>
    <v-app class="backGround">
        <v-content>
            <nav-bar :title="title">
            </nav-bar>
            <v-container ma-0 pa-0 fluid text-xs-center>
                <v-layout row wrap>
                    <main-button text="All recipes">
                    </main-button>
                    <main-button text="Choose by ingredients">
                    </main-button>
                    <main-button text="Add recipe">
                    </main-button>
                </v-layout>
                <bottom-nav>
                </bottom-nav>
            </v-container>
        </v-content>

    </v-app>
</template>

<script>
import mainButton from './components/main-page.vue'
import navBar from './components/nav-bar.vue'
import bottomNavBar from './components/botton-nav.vue'

export default {
  name: 'app',
  data :function() {
      return{
          title:"Main"
      }
  },
  components: {
      'main-button':mainButton,
      'nav-bar':navBar,
      'bottom-nav':bottomNavBar
  },
}
</script>
<style scoped>
    .backGround{
        /*background-size:;*/
        background-image: url("https://i.pinimg.com/originals/12/ec/f3/12ecf3434967abb127cc639735fdc8dd.jpg");
    }
</style>

