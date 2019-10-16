<template>
    <q-page padding>
        <q-card class="my-card">
            <q-img
                src="statics/fundoEstoque.png"
                basic
            >
                <div class="absolute-bottom text-subtitle2 text-center">
                    <span style="font-size: 30px"><strong>Estoque</strong></span>
                </div>
            </q-img>
        </q-card>
        <div class="row q-pt-sm q-pb-sm">
            <q-btn to="/estoque" unelevated rounded class="full-width" color="black">Acessar Estoque</q-btn>
        </div>
        
        <!-- FUNCIONALIDADE DO BOTAO ACESSAR PRODUTO "OK!" -->
        <q-card class="my-card">
            <q-img
                src="statics/fundoProduto.png"
                basic
            >
                <div class="absolute-bottom text-subtitle2 text-center">
                    <span style="font-size: 30px"><strong>Produto</strong></span>
                </div>
            </q-img>
        </q-card>
        <div class="row q-pt-sm q-pb-sm">
            <q-btn to="/produtos" unelevated rounded class="full-width" color="black">Acessar Produto</q-btn>
        </div>
        <!-- -->

        <!-- FUNCIONALIDADE DO BOTAO ACESSAR FUNCIONARIO "OK!" -->
        <q-card class="my-card">
            <q-img
                src="statics/fundoFuncionario.png"
                basic
            >
                <div class="absolute-bottom text-subtitle2 text-center">
                    <span style="font-size: 30px"><strong>Funcionário</strong></span>
                </div>
            </q-img>
        </q-card>
        <div class="row q-pt-sm">
            <q-btn to="/funcionarios" unelevated rounded class="full-width" color="black">Acessar Funcionário</q-btn>
        </div>
        <!-- -->

    </q-page>
    
</template>
