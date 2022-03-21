<template>
  <div class="nav" id="navbar">
    <router-link url="#bloco1">Home</router-link>
    <router-link url="#bloco1">Informação</router-link>
    <router-link url="#bloco1">Contato</router-link>
    <router-link url="#bloco1">Acesso Restrito</router-link>
    <a href="javascript:void(0);" class="icon" @click="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {

    }
  },
  methods: {
    myFunction() {
      var navbar = document.getElementById("navbar");
      if (navbar.className === "navbar") {
        navbar.className += " responsive";
      } else {
        navbar.className = "navbar";
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.nav {
  position: fixed;
  left: 0px;
  top: 5%;
  z-index: 1000;
  & .ui-button.ui-button-icon-only {
    background: #f39422;
    height: 60px;
    width: 60px;
    & .ui-icon {
      position: absolute;
      top: calc(50% - 16px);
      left: calc(50% - 18px);
      font-size: 45px;
    }
  }
  div.nav-menu {
    background-color: rgba(244, 244, 244, 0.933);
    position: fixed;
    z-index: 45;
    top: 12rem;
    left: calc(((100vw - 1367px) / 2) - 7px);
    width: 5.5rem;
    height: 5.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: rgba(67, 36, 17, 0.333) 0.2rem 0.2rem 0.4rem;
    cursor: pointer;
    opacity: 1;
    border-radius: 0px 0.5rem 0.5rem 0px;
    padding: 1.5rem 1rem;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    transition: width 0.3s ease 0s, opacity 0.5s ease 0s;
  }
}

</style>