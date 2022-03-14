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
      username: '',
      password: '',
    }
  },
  methods: {
    acessarConta(e) {
      e.preventDefault();
      console.log('Dados do usuário preenchido:');

      const username = this.username;
      const password = this.password;

      console.log(username);
      console.log(password);

      //ajax

      //banco de dados
    }
  }
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.menu {
  position: relative;
  &__text {
    color: $branco;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      color: $branco;
      text-decoration: none;
    }
  }
  &__top {
    background-color: #036BAC;
    z-index: 200;
    @include for-phone-only() {
      height: 35px;
      text-align: center;
      top: -12px;
    }
    @include for-tablet-only() {
      height: 70px;
      text-align: center;
      top: -12px;
    }
    @include for-desktop-only() {
      border-radius: 0px 0px 0px 25px;
      height: 120px;
      right: 0px;
      top: 0px;
      position: absolute;
      width: 400px;
    }
    &__title {
      @include for-phone-only() {
        position: relative;
        top: 10px;
      }
      @include for-tablet-only() {
        position: relative;
        top: 16px;
      }
      @include for-desktop-only() {
        left: 150px;
        top: 15px;
        position: absolute;
      }
    }
    &__submenu {
      position: absolute;
      top: 15px;
      display: inline-flex;
      @include for-phone-only() {
        visibility: hidden;
        width: 100%;
        left: 0px;
      }
      @include for-tablet-only() {
        position: relative;
        top: 0px;
      }
      @include for-desktop-only() {
        left: 45%;
      }
      &__options {
        margin: 0px 20px 0px 0px;
        display: inline-block;
      }
    }
    &__redeSocial {
      @include for-phone-only() {
        position: absolute;
        left: 0px;
        visibility: hidden;
      }
      @include for-tablet-only() {
        position: absolute;
        left: 0px;
        visibility: hidden;
      }
      @include for-desktop-only() {
        right: 30px;
        top: 20px;
        position: absolute;
        visibility: visible;
      }
      &__link {
        text-decoration: none;
      }
      &__img {
        width: 40px;
        margin: 0px 2px;
      }
    }
  }
}
</style>