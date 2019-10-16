<template>
  <q-page padding>
    <h4>Adicionar produto</h4>
    <q-form  autofocus="">
      <q-input v-model="produto" type="text" label="Produto" lazy-rules 
      :rules="[val => val !== null && val !== '' || 'Informe o nome do produto!']" />

      <q-input v-model="descricao" type="text" label="Descrição" lazy-rules 
      :rules="[val => val !== null && val !== '' || 'Informe a descrição do produto (ex: lata 350ml)!']" />

      <q-input v-model="quantidade" type="number" label="Quantidade" lazy-rules 
      :rules="[val => val !== null && val !== '' || 'Informe a quantidade do produto!']" />

      <q-input v-model="preco" type="number" label="Preço" lazy-rules 
      :rules="[val => val !== null && val !== '' || 'Informe o preço!']" />

      <q-btn @click="store()" label="Salvar"/>
      <q-btn round to="/produtos" color="primary" icon="dns" style="left: 215px;" />
      <q-btn round to="/" color="primary" icon="home" style="left: 115px;" />
    </q-form>  
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      produto: '',
      descricao: '',
      quantidade: '',
      preco: ''
      
    }
  },
  methods: {
    store () {
      let params = new URLSearchParams()
      params.append('action', 'store')
      params.append('produto', this.produto)
      params.append('descricao', this.descricao)
      params.append('quantidade', this.quantidade)
      params.append('preco', this.preco)
      this.$axios.post('http://localhost/appPhp/indexProduto.php', params)
        .then((response) => {
          console.log(response)
        })
    }, 
  }
}
</script>

<style>
</style>
