<template>
  <q-page padding>
    <body>
      <h3>Funcionários</h3>
      <q-btn to="/funcionarios/create" label="Novo" />
    <br><br><br>
    <q-table
      :columns="columns"
      :data="funcionarios">
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
          name: 'nome',
          field: 'nome',
          align: 'left',
          label: 'Nome'
        }
      ],
      funcionarios: []
    }
  },
  mounted () {
    this.getDados()
  },
  methods: {
    getDados () {
      this.$axios.get('http://localhost/appPhp/indexFuncionario.php')
        .then((res) => {
          this.funcionarios = res.data
          console.log('Dados', res.data)
        })
        .catch ((err) => {
          console.error(err)
        })
    },
    edit (func) {
      this.$router.push('funcionarios/' + func.id)
    }
  }
}
</script>

<style>
  body{
    padding: 0px;
    margin: 0px;
  }
</style>
