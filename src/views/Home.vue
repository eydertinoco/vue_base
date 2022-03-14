<template>
  <div class="body">
    <div class="card">
      <img alt="Arte inicial" src="./../assets/img/img_home.jpg" class="card__img">

      <div class="card__text">
        <p>Olá, esse é meu portifolio</p>

        <div>
          <h3>Linguagens:</h3>
          <img alt="Java" src="./../assets/img/framework/javaScript.png" style="height: 100px;">
          <img alt="JavaScript" src="./../assets/img/framework/java.png" style="height: 100px;">
        </div>
        <div>
          <h3>Experiência nos Framework</h3>
          <img alt="Sass" src="./../assets/img/framework/sass.png" style="height: 100px;">
          <img alt="Vue" src="./../assets/img/framework/vue.png" style="height: 100px;">
          <img alt="Angular" src="./../assets/img/framework/angular.png" style="height: 100px;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.card{
  background: $azulClaro;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &__img {
    background: $branco;
    border: none;
    border: none;
    border-radius: 0 200px 200px 0;
    height: 78vh;
  }
  &__text {
    color: $branco;
  }
}
</style>