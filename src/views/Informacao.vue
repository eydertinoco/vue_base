<template>
  <div class="body">
    <h1>Experiências</h1>
    <ul>
      <li v-for="experiencia in dbExperiencia" :key="experiencia.id">
        <p>Atuação: {{ experiencia.nome }}</p>
        <p>Cargo: {{ experiencia.cargo }}</p>
        <p>Empresa: {{ experiencia.empresa }}</p>
        <p>Atuando: {{ experiencia.atual }}</p>
      </li>
    </ul>
    <h1>Formação Acadêmica</h1>
    <ul>
      <li v-for="academico in dbAcademico" :key="academico.id">
        <p>Curso: {{ academico.curso }}</p>
        <p>Modelo: {{ academico.modelo }}</p>
        <p>Empresa: {{ academico.empresa }}</p>
        <p>Atuando: {{ academico.atual }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Informacao",
  data() {
    return {
      dbExperiencia: '',
      dbAcademico: '',
    }
  },
  methods: {
    async getExperiencia() {

      const req = await fetch("http://localhost:3000/experiencia");
      const data = await req.json();
      this.dbExperiencia = data;

      this.getAcademico();
    },
    async getAcademico() {

      const req = await fetch("http://localhost:3000/academica");
      const data = await req.json();
      this.dbAcademico = data;

    },
  },
  mounted() {
    this.getExperiencia();
  }
}
</script>

<style scoped lang="scss">
</style>