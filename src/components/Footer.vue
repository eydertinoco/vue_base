<template>
  <div align="center" class="footer">
    <div class="footer__info">
      <p class="footer__text footer__text__t1">Footer de Eyder</p>
      <p class="footer__text footer__text__t2">Nome da rua, Numero da rua - Bairro Cidade - Estado. CEP</p>
      <a class="footer__text footer__text__t2" href="http://www.freepik.com">Arte: Designed by stories / Freepik</a>
      <div>
        <a href="https://www.linkedin.com/in/eyder-tinoco-ferreira-neto-91337a155/" target="blank">
          <fa :icon="['fab', 'linkedin']" class="footer__redeSocial__icon"/>
        </a>
        <a href="https://wa.me/5582999221574" target="blank"
           class="footer__redeSocial__icon">
          <fa :icon="['fab', 'whatsapp']" class="footer__redeSocial__icon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import './../assets/style/mixins';

.footer {
  background-color: $azulClaro;
  bottom: 0px;
  text-transform: uppercase;
  position: relative;
  width: 100%;
  @include for-phone-only() {
    height: 200px;
  }
  @include for-tablet-only() {
    height: 180px;
  }
  @include for-desktop-only() {
    height: 160px;
  }
  &__info {
    bottom: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    @include for-phone-only() {
      height: 140px;
    }
    @include for-tablet-only() {
      height: 100px;
    }
  }
  &__text {
    color: $branco;
    font-size: 12px !important;
    font-family: "Montserrat",Helvetica,Arial,sans-serif !important;
    margin: 5px 0;
    @include for-phone-only() {
      position: absolute;
    }
    @include for-tablet-only() {
      position: absolute;
    }
    @include for-desktop-only() {
      height: 20px;
      position: relative;
    }
    &__t1 {
      font-weight: bold;
      @include for-phone-only() {
        right: calc(50% - 80px);
        top: 10px;
      }
      @include for-tablet-only() {
        right: calc(50% + 120px);
        top: 10px;
      }
    }
    &__t2 {
      @include for-phone-only() {
        left: calc(50% - 185px);
        top: 40px;
      }
      @include for-tablet-only() {
        left: calc(50% - 100px);
        top: 10px;
      }
    }
  }
  &__redeSocial {
    @include for-phone-only() {
      top: 100px;
      position: relative;
    }
    @include for-tablet-only() {
      top: 60px;
      position: relative;
    }
    @include for-desktop-only() {
      bottom: 0px;
      position: absolute;
    }
    &__link {
      text-decoration: none;
    }
    &__icon {
      width: 40px;
      height: 40px;
      color: $branco;
    }
  }
}

</style>