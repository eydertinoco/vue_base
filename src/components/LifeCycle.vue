<template>
<h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      nome: 'Não sei',
    }
  },
  created() {
    setTimeout(() => {
      this.nome = 'Ainda não sei'
    }, 1000)
  },
  mounted() {
    setTimeout(() => {
      this.nome = 'Já disse que não sei'
    }, 2000)
  }
}
</script>

<style scoped>

</style>