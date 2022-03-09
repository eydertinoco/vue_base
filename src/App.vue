<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PrimeiroComponente/>
  <LifeCycle/>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from "@/components/LifeCycle";

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
