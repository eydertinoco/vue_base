<template>
  <Pessoa/>
  <Info :email="email" :esta_trabalhando="esta_trabalhando"/>
</template>

<script>
import Pessoa from "@/components/Pessoa";
import Info from "@/components/Info";
export default {
  name: "LifeCycle",
  components: {Info, Pessoa},
  data() {
    return {
      email: 'Joao@email.com',
      esta_trabalhando: true,
    }
  },
  methods: {
    lifeCycle() {

    }
  }
}
</script>

<style scoped>

</style>