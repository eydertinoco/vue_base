<template>
  <div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousel"
}
</script>

<style scoped>

.carousel-title {
  font-size: 30px;
  position: absolute;
  z-index: 800;
  margin: 400px 40px 0;
  color: orange;
  text-shadow: 0px 0px 10px black;
}

.ui-carousel .ui-carousel-viewport .ui-carousel-items .ui-carousel-item {
  margin: 0;
  padding: 0;
  float: left;
}
body .ui-carousel .ui-carousel-viewport .ui-carousel-item {
  border: none;
}

body .ui-carousel .ui-carousel-header {
  background: transparent;
  color: #495057;
  padding: 0;
  border: 0;
  margin: 0;
  font-weight: 100;
  /*position: absolute;*/
}

body .ui-carousel .ui-carousel-button.ui-carousel-next-button {
  font-family: 'primeicons' !important;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  background: white;
  position: absolute;
  right: 30px;
  top: calc(50% - 25px);
  z-index: 900;

}

body .ui-carousel .ui-carousel-button.ui-carousel-prev-button {
  font-family: 'primeicons' !important;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  background: white;
  position: absolute;
  left: 30px;
  top: calc(50% - 25px);
  z-index: 900;
}

body .ui-carousel .ui-carousel-page-links {
  margin: 0 0.5rem;
  position: absolute;
  top: auto;
  bottom: 20px;
  left: calc(50% - 40px);
  z-index: 900;
  background: white;
  width: auto;
  border-radius: 30px;
}

.product-item .product-item-content {
  border: 1px solid var(--surface-d);
  border-radius: 3px;
  margin: .3rem;
  text-align: center;
  padding: 2rem 0;
}

.product-item .product-image {
  width: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}


</style>