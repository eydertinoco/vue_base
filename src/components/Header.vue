<template>
  <div id="logotipo" class="header__logotipo">
    <a href="http://www.maceio.al.gov.br" target="blank">
      <img alt="Prefeitura de Maceió" src="../assets/img/logotipo/LogotipoComSlogan.svg"
           class="header__logotipo__img"/>
    </a>
  </div>
  <div id="topbar">
<!--    <Navbar/>-->
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  // components: {Navbar},
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

.header {
  &__navbar {
    background: $azul;
    height: 75px;
    z-index: 800;
    & ul {
      display: inline-block;
      position: relative;
      top: 12px;
    }
    & li {
      display: inline;
      margin: 0px 15px;
    }
    &__separador {
      border-left: 2px solid white;
      font-size: 24px;
    }
    &__text {
      color: white;
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      &:hover {
        color: #f39422;
      }
      &:active {
        color: #b16b18;
      }
    }
  }

  &__logotipo {
    background: $branco;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 900;
    @include for-phone-only() {
      border-radius: 0px 0px 40px 40px;
      display: flex;
      justify-content: center;
      height: 120px;
      width: 100%;
    }
    @include for-tablet-only() {
      border-radius: 0px 0px 0px 150px;
      height: 140px;
      width: 450px;
    }
    @include for-desktop-only() {
      border-radius: 0px 0px 0px 150px;
      height: 140px;
      width: 450px;
    }
    &__img {
      @include for-phone-only() {
        position: relative;
        top: -10px;
        right: 0;
        width: 300px;
      }
      @include for-tablet-only() {
        position: absolute;
        top: -20px;
        right: 20px;
        width: 360px;
      }
      @include for-desktop-only() {
        position: absolute;
        top: -20px;
        right: 20px;
        width: 360px;
      }
    }
  }
}
</style>