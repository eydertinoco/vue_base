<template>
  <div>
    <button @click="primeiro($event), segundo($event)">Ativar Multiplos Eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
      multiplos_eventos: '',
    }
  },
  methods: {
    primeiro() {
      this.multiplos_eventos = "Primeiro evento ativado";
    },
    segundo() {
      setTimeout(() => this.multiplos_eventos = "Segundo evento ativado", 500);
    }
  }
}
</script>

<style scoped>

</style>