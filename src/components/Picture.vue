<template>
  <img :src="avatar" :alt="descricao"/>
  <MudarImagem @mudar-imagem="trocarImagem"/>
</template>

<script>
import MudarImagem from "@/components/MudarImagem";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Picture",
  components: {MudarImagem},
  data() {
    return {
      avatar: "/img/avatar.png",
      descricao: "Nome do Usuário",
    }
  },
  methods: {
    trocarImagem() {
      this.avatar = "/img/avatar2.png";
    }
  }
}
</script>

<style scoped>

</style>