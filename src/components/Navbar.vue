<template>
  <div id="nav">
    <router-link to="/" class="logoUrl">
      <img :src="src" :alt="alt" id="logo"/>
    </router-link>
    <router-link to="/">Home</router-link>
    <router-link to="/pedidos">Pedidos</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  props: ['src', 'alt'],
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

  #nav {
    background: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & .logoUrl {
      margin: auto;
      margin-left: 0;
      & #logo {
        height: 40px;
        width: 40px;
      }
    }
    & a {
      color: #FCBA03;
      text-decoration: none;
      margin: 12px;
      transition: 0.5s;
      &:hover {
        color: #FFF;
      }
    }
  }
</style>