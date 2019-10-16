<template>
  <q-page padding>
    <body>
      <h3>Produtos no Estoque</h3>
    <br><br><br>
     <q-btn class="voltar" push="4" @click="0" to="/produtos">
     voltar
     </q-btn>
    <q-table
      :columns="columns"
      :data="produtos">
      <q-tr slot="body" slot-scope="props" :props="props" @click.native="edit(props.row)">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
      </q-tr>
    </q-table>
    </body>
  </q-page>
</template>

<script>

export default {
  // name: 'PageName',
  data () {
    return {
      columns: [
        {
          name: 'id',
          field: 'id',
          align: 'left',
          label: 'ID'
        },
        {
          name: 'produto',
          field: 'produto',
          align: 'left',
          label: 'Produto'
        },
        {
          name: 'descricao',
          field: 'descricao',
          align: 'left',
          label: 'Descrição'
        },
        {
          name: 'quantidade',
          field: 'quantidade',
          align: 'left',
          label: 'Quantidade'
        },
        {
          name: 'preco',
          field: 'preco',
          align: 'left',
          label: 'Preço'
        }
      ],
      produtos: []
    }
  },
  mounted () {
    this.getDados()
  },
  methods: {
    getDados () {
      this.$axios.get('http://localhost/appPhp/indexProduto.php')
        .then((res) => {
          this.produtos = res.data
          console.log('Dados', res.data)
        })
        .catch ((err) => {
          console.error(err)
        })
    },
    edit (produto) {
      this.$router.push('produtos/' + produto.id)
    }
  }
}
</script>

<style>
  body{
    padding: 0px;
    margin: 0px;
  }
  .voltar{
      color: black;
      left: 12px;
      background: orange;

  }
</style>
