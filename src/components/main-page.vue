<template>
    <v-flex pa-5>
        <v-btn v-on:click="func" fab color="orange lighten-2"
               class="mainBtn" large round >{{ text }}
        </v-btn>
    </v-flex>
</template>

<script>
export default {
  name: 'mainButton',
  props: {
    text: String,
    page:String,
  },
  methods:{
      func(){
          this.$emit('changePage',this.page)
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mainBtn{
        width:70vw;
        height:12.93vh;
        font-size: large;
        font-style: italic;
        font-family: "Britannic Bold";
        /*opacity: 0.8;*/
    }

</style>
