<template>
  <div>
    <Message :msg="msg" v-show="msg"/>
    <div>
      <form id="burger-form">

        <div class="input-container">
          <label for="nome">Nome do Cliente:</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome"/>
        </div>

        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select id="pao" name="pao" v-model="pao">
            <option value="">Selecione seu pão</option>
            <option v-for="pao in dbPaes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="carne">Escolha a carne:</label>
          <select id="carne" name="carne" v-model="carne">
            <option value="">Selecione o tipo de carne</option>
            <option v-for="carne in dbCarnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Escolha os opicionais:</label>

          <div v-for="opcional in dbOpcionais" :key="opcional.id" class="checkbox-container">
            <input type="checkbox" v-model="opcionais" :value="opcional.tipo" name="opcionais">
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>

        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger!" @click="submeterPedido($event)"/>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message";
export default {
  name: "BurgerForm",
  components: {Message},
  data() {
    return {
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      dbPaes: null,
      dbCarnes: null,
      dbOpcionais: null,
      status: null,
      msg: null,
    }
  },
  methods: {
    async getIngredientes() {

      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.dbPaes = data.paes;
      this.dbCarnes = data.carnes;
      this.dbOpcionais = data.opcionais;

    },

    async submeterPedido(e) {
      e.preventDefault();

      const data = {
        nome: this.nome,
        pao: this.pao,
        carne: this.carne,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      }

      console.log(data);

      const dataJson = JSON.stringify(data);

      const req = await fetch('http://localhost:3000/burgers', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson,
      })

      const res = await req.json();

      //Mensagem
      this.msg = `Pedido N° ${res.id} realizado com sucesso`;
      setTimeout(() => this.msg='', 3000);

      //Limpar Campos
      this.name = '';
      this.carne = '';
      this.pao = '';
      this.opcionais = '';

      console.log(res)
    }
  },
  mounted() {
    this.getIngredientes()
  },
}
</script>

<style scoped>
#burger-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}
input, select {
  padding: 5px 10px;
  width: 300px;
}
#opcionais-container {
  flex-direction: row;
  flex-wrap: wrap;
}
#opcionais-title {
  width: 100%;
}
.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
.checkbox-container span,
.checkbox-container input {
  width: auto;
}
.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}
.submit-btn {
  background-color: #222;
  color:#fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}
.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>