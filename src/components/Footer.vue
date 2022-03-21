<template>
  <div class="footer">
    <div align="center" class="footer__info">
      <img alt="Prefeitura de Maceió" src="../assets/img/logotipo//Logo_Renasce.png"
           class="footer__info__img__1"/>

      <img alt="Prefeitura de Maceió" src="../assets/img/logotipo/Logo_Maceio.png"
           class="footer__info__img__2"/>
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
  background-color: $azulclaro;
  bottom: 0px;
  text-transform: uppercase;
  position: relative;
  margin-top: 0;
  width: 100%;
  @include for-phone-only() {
    height: 280px;
  }
  @include for-tablet-only() {
    height: 280px;
  }
  @include for-desktop-only() {
    height: 150px;
  }
  &__info {
    align-items: center;
    display: flex;
    justify-content: center;
    @include for-phone-only() {
      flex-direction: column;
    }
    @include for-tablet-only() {
      flex-direction: column;
    }
    @include for-desktop-only() {
      flex-direction: row;
    }
    &__img {
      &__1 {
        width: 140px;
        height: 140px;
        @include for-phone-only() {
          position: relative;
          margin-top: 10px;
        }
        @include for-tablet-only() {
          position: relative;
          margin-top: 10px;
        }
        @include for-desktop-only() {
          top: 5px;
          left: 10px;
          position: absolute;
        }
      }
      &__2 {
        width: 340px;
        height: 110px;
        position: relative;
        @include for-phone-only() {
          top: 10px;
        }
        @include for-tablet-only() {
          top: 15px;
        }
        @include for-desktop-only() {
          top: 20px;
        }
      }
    }
  }
}
</style>