<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins.scss';

  #main-banner {
    background-image: url('../assets/img/burger.jpg');
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @include for-phone-only() {
      background-position: 0;
    }
    @include for-tablet-only() {
      background-position: 0;
    }
    @include for-desktop-only() {
      background-position: 0 -185px;
    }
    & h1 {
      color: #FFF;
      text-align: center;
      font-size: 60px;
      background-color: #222;
      padding: 20px 40px;
    }
  }
</style>