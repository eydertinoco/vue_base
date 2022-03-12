<template>
  <div id="topbar">
    <Navbar/>
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
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';


</style>