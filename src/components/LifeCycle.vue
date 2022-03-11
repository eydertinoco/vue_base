<template>
  <Pessoa/>
  <info/>
</template>

<script>
import Pessoa from "@/components/Pessoa";
import Info from "@/components/Info";
export default {
  name: "LifeCycle",
  components: {Info, Pessoa},
  methods: {
    lifeCycle() {

    }
  }
}
</script>

<style scoped>

</style>