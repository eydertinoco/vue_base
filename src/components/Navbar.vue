<template>
  <div class="navbar" id="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/informacao">Informação</router-link>
    <router-link to="/contato">Contato</router-link>
    <router-link to="/login">Acesso Restrito</router-link>
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

.navbar {
  background-color: $azulClaro;
  overflow: hidden;
  /* Style the links inside the navigation bar */
  & a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
      background-color: #cc8925;
      color: #14477c;
      font-weight: 700;
    }
    &:active {
      background-color: #cc8925;
      color: #0479c3;
      font-weight: 900;
    }
    &:not(:first-child) {
      @include for-phone-only() {
        display: none;
      }
    }
    &.icon {
      @include for-phone-only() {
        float: right;
        display: block;
      }
    }
  }
  /* Hide the link that should open and close the topnav on small screens */
  & .icon {
    display: none;
  }
  &.responsive {
    @include for-phone-only() {
      position: relative;
    }
    & a {
      @include for-phone-only() {
        float: none;
        display: block;
        text-align: left;
      }
      &.icon {
        @include for-phone-only() {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
}
</style>