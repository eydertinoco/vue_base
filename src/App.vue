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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700;800;900&display=swap');
@import './assets/style/mixins.scss';

* {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  @include for-phone-only() {
    min-height: calc(100vh - 318px);
  }
  @include for-tablet-only() {
    min-height: calc(100vh - 278px);
  }
  @include for-desktop-only() {
    min-height: calc(100vh - 268px);
  }
}

</style>
