<template>
    <v-flex pa-3>
        <v-btn v-on:click="func" fab color="#FDD835"
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

<style scoped>
    .mainBtn{
        width:70vw;
        height:12.93vh;
        font-size: large;
        font-style: italic;
        font-family: "Arial";
        /*opacity: 0.8;*/
    }

</style>
