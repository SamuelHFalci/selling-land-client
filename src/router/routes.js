
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/buscar', name: 'buscar', component: () => import('pages/land/List.vue'), props: true },
      { path: '/imovel/visualizar/:id', name: 'showImovel', component: () => import('pages/land/Show.vue') },
      { path: '/imovel/cadastrar', name: 'addImovel', component: () => import('pages/land/Save.vue') },
      { path: '/imovel/meus-anuncios', name: 'meusImoveis', component: () => import('pages/land/MyLands.vue') },
      { path: '/login', name: 'login', component: () => import('pages/Login.vue') }
    ]
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
