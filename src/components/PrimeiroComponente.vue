<template>
  <h1>Esse é meu primeiro Componente.</h1>
  <p>E esse é meu {{ destino }}</p>
  <MyForm/>
</template>

<script>
import MyForm from "@/components/MyForm";

export default {
  name: "PrimeiroComponente",
  components: {MyForm},
  data() {
    return {
      destino: "Submundo",
    }
  }
}
</script>

<style scoped>

</style>