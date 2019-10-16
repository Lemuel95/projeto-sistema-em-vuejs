<template>
  <q-page padding>
    <h3>Editar funcionario</h3>

    <q-input v-model="nome" type="text" label="Nome" />
    
    <q-btn-group>
      <q-btn @click="update()" label="Atualizar" />
      <q-btn @click="destroy()" color="red-5" label="Remover" />
    </q-btn-group>
    <q-btn class="medo2" @click.native="create(props.row)" to="/create" push="1">
      Cancelar
    </q-btn>
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
  mounted () {
    this.$axios.get('http://localhost/appPhp/indexFuncionario.php?action=show&id=' + this.$route.params.id)
      .then((response) => {
        this.nome = response.data.nome
        
      })
  },
  methods: {
    update () {
      let params = new URLSearchParams()
      params.append('action', 'update')
      params.append('id', this.$route.params.id)
      params.append('nome', this.nome)


      this.$axios.post('http://localhost/appPhp/indexFuncionario.php', params)
        .then((response) => {
          console.log(response)
        })
    },
    destroy () {
      this.$axios.get('http://localhost/appPhp/indexFuncionario.php?action=destroy&id=' + this.$route.params.id)
        .then((response) => {
          this.$q.dialog({
            title: 'Atenção',
            message: 'Removido com sucesso'
          })
          this.$router.push('/funcionarios')
        })
    }
  }
}
</script>

<style>
.medo2{
  left: 15px;
  color: black;
  background-color: orange;
}
</style>
