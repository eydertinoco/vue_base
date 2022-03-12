<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Não estou trabalhando no momento.</p>
    <p>Utilizo as seguintes tecnologias back-end:</p>
    <ul>
      <li v-for="(technology, index) in backend_technology" :key="index">
        {{ technology }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias front-end:</p>
    <ul>
      <li v-for="(technology) in frontend_technology" :key="technology.id">
        {{ technology.lang }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ textobotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">Basta clicar aqui</a></p>
    <Picture/>
  </div>
</template>

<script>
  import Picture from "@/components/Picture";
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Info",
    components: {Picture},
    props: {
      email: String,
      esta_trabalhando: Boolean,
    },
    data() {
      return {
        // esta_trabalhando: true,
        // email: 'eydertinoco@outlook.com',
        mostrar_email: false,
        textobotao: 'Mostrar Email',
        meu_link: 'https://www.google.com.br/',
        backend_technology: ['JavaScript', 'PHP', 'Python'],
        frontend_technology: [
          {id: 1, lang: 'HTML'},
          {id: 2, lang: 'CSS'},
          {id: 3, lang: 'VUE'},
        ],
      }
    },
    methods: {
      showEmail() {
        this.mostrar_email = !this.mostrar_email;
        if (!this.mostrar_email) {
          this.textobotao = 'Mostrar Email'
        } else {
          this.textobotao = 'Esconder email.'
        }
      }
    }
  }
</script>

<style scoped>

</style>