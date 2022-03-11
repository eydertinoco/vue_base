<template>
  <div>
    <h1>Meu nome é: {{ nome }}</h1>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Pessoa',
    data() {
      return {
        nome: 'Não sei',
      }
    },
    created() {
      setTimeout(() => {
        this.nome = 'Ainda não sei'
      }, 1000)
      this.lifeCycle()
    },
    mounted() {
      setTimeout(() => {
        this.nome = 'Já disse que não sei'
      }, 2000)
      this.lifeCycle()
    },
    methods: {
      lifeCycle() {
        console.log('Executando...')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>