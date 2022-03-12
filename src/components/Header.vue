<template>
  <div id="topbar">
    <Navbar :src="logomarca" :alt="descricao"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  components: {Navbar},
  data() {
    return {
      logomarca: '/img/logo.png',
      descricao: 'Make your burger',
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';


</style>