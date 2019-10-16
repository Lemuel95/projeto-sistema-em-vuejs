<template>
  <q-page padding>
    <h4>Adicionar funcionário</h4>
    <q-form  autofocus="">

      <q-input v-model="nome" type="text" label="Nome" lazy-rules 
      :rules="[val => val !== null && val !== '' || 'Informe o nome do funcionário!']" />

      <q-btn @click="store()" label="Salvar"/>
      <q-btn round to="/funcionarios" color="primary" icon="list" style="left: 215px;" />
      <q-btn round to="/" color="primary" icon="home" style="left: 115px;" />
    </q-form>  
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      nome: ''
      
    }
  },
  methods: {
    store () {
      let params = new URLSearchParams()
      params.append('action', 'store')
      params.append('nome', this.nome)

      this.$axios.post('http://localhost/appPhp/indexFuncionario.php', params)
        .then((response) => {
          console.log(response)
        })
    }, 
  }
}
</script>

<style>
</style>
