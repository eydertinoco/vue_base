<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
  components: {Header, Footer}
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

</style>
