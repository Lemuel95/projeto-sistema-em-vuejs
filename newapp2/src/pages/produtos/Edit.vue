<template>
  <q-page padding>
    <h3>Editar produto</h3>

    <q-input v-model="produto" type="text" label="Produto" />
    <q-input v-model="descricao" type="text" label="Descrição" />
    <q-input v-model="quantidade" type="number" label="Quantidade" />
    <q-input v-model="preco" type="number" label="Preço" />
    
    <q-btn-group>
      <q-btn @click="update()" label="Atualizar" />
      <q-btn @click="destroy()" color="red-5" label="Remover" />
    </q-btn-group>
  <q-btn class="medo" @click.native="create(props.row)" to="/create" push="1">
  Cancelar
  </q-btn> 
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
      preco: 0,
    }
  },
  mounted () {
    this.$axios.get('http://localhost/appPhp/indexProduto.php?action=show&id=' + this.$route.params.id)
      .then((response) => {
        this.produto = response.data.produto
        this.descricao = response.data.descricao
        this.quantidade = response.data.quantidade
        this.preco = response.data.preco
        
      })
  },
  methods: {
    update () {
      let params = new URLSearchParams()
      params.append('action', 'update')
      params.append('id', this.$route.params.id)
      params.append('produto', this.produto)
      params.append('descricao', this.descricao)
      params.append('quantidade', this.quantidade)
      params.append('preco', this.preco)

      this.$axios.post('http://localhost/appPhp/indexProduto.php', params)
        .then((response) => {
          console.log(response)
        })
    },
    destroy () {
      this.$axios.get('http://localhost/appPhp/indexProduto.php?action=destroy&id=' + this.$route.params.id)
        .then((response) => {
          this.$q.dialog({
            title: 'Atenção',
            message: 'Removido com sucesso'
          })
          this.$router.push('/produtos')
        })
    }
  }
}
</script>

<style>
.medo{
  left: 15px;
  color: forestgreen;
  background-color: darkgrey;
}
</style>
