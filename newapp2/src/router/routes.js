
const routes = [
  {
    path: '/funcionarios/create',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/funcionarios/Create.vue') }
    ]
  },
  {
    path: '/produtos/create',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/produtos/Create.vue') }
    ]
  },
  {
    path: '/funcionarios/:id',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/funcionarios/Edit.vue') },
      { path: '/Create', component: () => import('pages/funcionarios/Create.vue') }
    ]
  },
  {
    path: '/produtos/:id',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/produtos/Edit.vue') },
      { path: '/Create', component: () => import('pages/produtos/Create.vue') },
    ]
  },
  {
    path: '/funcionarios',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/funcionarios/Index.vue') }
    ]
  },
  {
    path: '/produtos',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/produtos/Index.vue') }
    ]
  },
  //{
   // path: '/estoque/create',
   // component: () => import('layouts/MyLayout.vue'),
   // children: [
   //   { path: '', component: () => import('pages/estoque/Create.vue') }
  //  ]
  ///},
 // {
   // path: '/estoque/:id',
   // component: () => import('layouts/MyLayout.vue'),
   // children: [
  //    { path: '', component: () => import('pages/funcionarios/Edit.vue') }
 //   ]
 // },
  {
    path: '/estoque',
    component: () => import('layouts/MyLayout.vue'),
    children: [
     { path: '', component: () => import('pages/estoque/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') }
    ],
    meta: {
      guest: true
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
