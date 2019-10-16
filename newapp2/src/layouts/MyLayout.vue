<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal class="bg-black" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          GeEstoque
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>MENU</q-item-label>
        <q-item @click.native="navigate('/')" v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click.native="navigate('/produtos')" v-ripple>
          <q-item-section avatar>
            <q-icon name="fastfood" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Produto</q-item-label>
            <q-item-label caption>Listagem</q-item-label>
          </q-item-section>
        </q-item>
        <q-item @click.native="navigate('/funcionarios')" v-ripple>
          <q-item-section avatar>
            <q-icon name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Funcionário</q-item-label>
            <q-item-label caption>Listagem</q-item-label>
          </q-item-section>
        </q-item>
         <q-item @click.native="navigate('/estoque')" v-ripple>
          <q-item-section avatar>
            <q-icon name="assignment_ind" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Estoque</q-item-label>
            <q-item-label caption>Listagem</q-item-label>
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    navigate (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style>
</style>
