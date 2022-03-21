<template>
  <div class="body">
    <div class="card">
      <img alt="Arte inicial" src="./../assets/img/img_home.jpg" class="card__img">

      <div class="card__info">
        <h1 class="card__info__title">Eyder Tinoco Ferreira Neto</h1>
        <p class="card__info__bio">
          {{ descricao }}
        </p>
        <div class="linguagem">
          <h3 class="linguagem__title">Linguagens</h3>
          <ul class="linguagem__list">
            <li v-for="linguagem in dbLinguagens" :key="linguagem.id" class="linguagem__list__un">
              <img :alt="linguagem.nome" :src="linguagem.img" :value="linguagem.nome" class="linguagem__list__un__icon">
            </li>
          </ul>
        </div>
        <div class="framework">
          <h3 class="framework__title">Framework</h3>
          <ul class="framework__list">
            <li v-for="framework in dbFrameworks" :key="framework.id" class="framework__list__un">
              <img :alt="framework.nome" :src="framework.img" :value="framework.nome" class="framework__list__un__icon">
            </li>
          </ul>
        </div>
        <div class="library">
          <h3 class="library__title">Component Libraries</h3>
          <ul class="library__list">
            <li v-for="library in dbLibrary" :key="library.id" class="library__list__un">
              <img :alt="library.nome" :src="library.img" :value="library.nome" class="library__list__un__icon">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      descricao: 'Lorem ipsum dolor sit amet consectetur adipiscing elit egestas inceptos ligula vehicula, senectus conubia eu \n' +
          '          sed etiam class nibh vulputate mus id. Nostra feugiat cubilia eget. Nec venenatis montes hac magnis \n' +
          '          netus congue fusce pulvinar inceptos, diam varius accumsan curae placerat est vivamus litora phasellus \n' +
          '          facilisis, imperdiet ultricies euismod tortor id aliquet et nunc.',
      dbLinguagens: null,
      dbFrameworks: null,
      dbLibrary: null,
    }
  },
  methods: {
    async getLinguagens() {

      const req = await fetch("http://localhost:3000/linguagens");
      const data = await req.json();
      this.dbLinguagens = data;

      this.getFramework();

    },
    async getFramework() {

      const req = await fetch("http://localhost:3000/frameworks");
      const data = await req.json();
      this.dbFrameworks = data;

      this.getLibrary();
    },
    async getLibrary() {

      const req = await fetch("http://localhost:3000/library");
      const data = await req.json();
      this.dbLibrary = data;

    },
  },
  mounted() {
    this.getLinguagens();
  }
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
    width: 50vw;
    @include for-phone-only() {
      visibility: hidden;
      width: 0;
    }
    @include for-tablet-only() {
      visibility: hidden;
      width: 0;
    }
  }
  &__info {
    width: 100%;
    min-height: calc(100vh - 231px);
    &__title {
      text-align: center;
    }
    &__bio {
      text-align: justify;
      padding: 10px 20px;
      @include for-phone-only() {
        font-size: 10px;
      }
      @include for-tablet-only() {
        font-size: 10px;
      }
      @include for-desktop-only() {
        font-size: 24px;
      }
      @include for-2k-only() {
        font-size: 38px;
      }
      @include for-4k-only() {
        font-size: 50px;
      }
    }
    & .linguagem {
      color: $branco;
      align-items: center;
      display: flex;
      flex-direction: column;
      &__title {
        font-width: bold;
      }
      &__list {
        display: flex;
        flex-direction: row;
        &__un {
          display: flex;
          &__icon {
            height: 100px;
            margin: 0px 5px;
          }
        }
      }
    }
    & .framework {
      color: $branco;
      align-items: center;
      display: flex;
      flex-direction: column;
      &__title {
        font-width: bold;
      }
      &__list {
        display: flex;
        flex-direction: row;
        &__un {
          display: flex;
          &__icon {
            height: 100px;
            margin: 0px 5px;
          }
        }
      }
    }
    & .library {
      color: $branco;
      align-items: center;
      display: flex;
      flex-direction: column;
      &__title {
        font-width: bold;
      }
      &__list {
        display: flex;
        flex-direction: row;
        &__un {
          display: flex;
          &__icon {
            height: 100px;
            margin: 0px 5px;
          }
        }
      }
    }
  }

}
</style>