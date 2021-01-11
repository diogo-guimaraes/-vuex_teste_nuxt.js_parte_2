<template>
  <p>Aluno {{aulasCompletas}}</p>
    <!-- <p>Aluno {{$store.state.aulasCompletas}}</p> -->
</template>

<script>
import {mapState} from "vuex";
export default {
  computed: {
    // mapeia o state e conseguirmos passar aulasCompletas e não $store.state.aulasCompletas
    ...mapState(["aulasCompletas"])
  }

}
</script>

<style>

</style>