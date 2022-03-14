<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700;800;900&display=swap');
@import './assets/style/mixins.scss';


html, body {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.body {
  @include for-phone-only() {
    min-height: calc(100vh - 245px);
  }
  @include for-tablet-only() {
    min-height: calc(100vh - 228px);
  }
  @include for-desktop-only() {
    min-height: calc(100vh - 208px);;
  }
}

</style>
