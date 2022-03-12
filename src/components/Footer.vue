<template>
  <footer id="footer" align="center" class="footer">
      <p>Make Your Burger &copy; 2021</p>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins.scss';

.footer {
  background-color: #222222;
  bottom: 0px;
  border-top: 4px solid #111111;
  color: #FCBA03;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  @include for-phone-only() {
    height: 140px;
  }
  @include for-tablet-only() {
    height: 100px;
  }
  @include for-desktop-only() {
    height: 90px;
  }
}
</style>