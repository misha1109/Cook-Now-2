<template>
    <v-flex pt-3>
        <link rel="stylesheet" href="//brick.a.ssl.fastly.net/Roboto:400"/>
        <v-btn v-on:click="func" fab color="#FDD835"
               class="button" large round >
            <h4>
                {{ text }}
            </h4>
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

    .button {
        width:70%;
        background: #3498db;
    }


</style>
