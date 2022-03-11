<template>
  <Header/>
  <img alt="Vue logo" src="./assets/logo.png">
  <PrimeiroComponente/>
  <LifeCycle/>
  <Footer/>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import PrimeiroComponente from './components/PrimeiroComponente'
import LifeCycle from "@/components/LifeCycle";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PrimeiroComponente,
    LifeCycle,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700;800;900&display=swap');

html, body {
  background: white;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

</style>
