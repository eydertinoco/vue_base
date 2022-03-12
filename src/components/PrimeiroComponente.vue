<template>
  <h1>Esse é meu primeiro Componente.</h1>
  <p>E esse é meu {{ destino }}</p>
  <MyForm/>
  <MultiplosEventos/>
</template>

<script>
import MyForm from "@/components/MyForm";
import MultiplosEventos from "@/components/MultiplosEventos";

export default {
  name: "PrimeiroComponente",
  components: {MultiplosEventos, MyForm},
  data() {
    return {
      destino: "Submundo",
    }
  }
}
</script>

<style scoped>

</style>