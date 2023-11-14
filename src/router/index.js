import { createRouter, createWebHashHistory } from 'vue-router'
import SearchResultPage from '../views/SearchResultPage.vue'
import BusinessPage from '../views/BusinessView.vue'


const routes = [
  {
    
      path: '/',
      name: 'main',
      redirect: '/home',
      component: () => import('@/views/MainView.vue'),
      children:[

        {
          path: '/home',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        },
        {
          path: '/trending',
          name: 'trending',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/components/Trending.vue')
        },
        {
          path: '/global',
          name: 'global',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Global.vue')
        },
        {
          path: '/technology',
          name: 'technology',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Technology.vue')
        },
        {
          path: '/search-results/:query',
          name: 'search-results',
          component: SearchResultPage,
          props: true,
        },
        {
          path: '/business',
          name: 'business',
          component: BusinessPage,
        },


    

    ]
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
