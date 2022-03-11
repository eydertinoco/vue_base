<template>
  <img :src="avatar" :alt="descricao"/>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Picture",
  data() {
    return {
      avatar: "/img/avatar.png",
      descricao: "Nome do Usuário",
    }
  }
}
</script>

<style scoped>

</style>