import { createRouter, createWebHashHistory } from 'vue-router'
import SearchResultPage from '../views/SearchResultPage.vue'
import BusinessPage from '../views/BusinessView.vue'


const routes = [
  {
    
      path: '/',
      name: 'main',
      redirect: '/home',
      component: () => import('@/views/MainView.vue'),
      meta: {
        title: 'ENews.net', // Add the title for the parent route here
      },
      children:[

        {
          path: '/home',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/HomeView.vue'),
          meta: {
            title: 'Home', // Add the title for the parent route here
          },
        },
        {
          path: '/politics',
          name: 'politics',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/PoliticsView.vue'),
          meta: {
            title: 'Politics', // Add the title for the parent route here
          },
        },
        {
          path: '/trending',
          name: 'trending',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Trending.vue'),
          meta: {
            title: 'Trending News', // Add the title for the parent route here
          },
        },
        {
          path: '/global',
          name: 'global',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Global.vue'),
          meta: {
            title: 'Global', // Add the title for the parent route here
          },
        },
        {
          path: '/technology',
          name: 'technology',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Technology.vue'),
          meta: {
            title: 'technology', // Add the title for the parent route here
          },
        },
        {
          path: '/search-results/:query',
          name: 'search-results',
          component: SearchResultPage,
          props: true,
          meta: {
            title: 'Search', // Add the title for the parent route here
          },
        },
        {
          path: '/business',
          name: 'business',
          component: BusinessPage,
          meta: {
            title: 'Business', // Add the title for the parent route here
          },
        },
        {
          path: '/entertainment',
          name: 'entertainment',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Entertainment.vue'),
          meta: {
            title: 'Entertainment', // Add the title for the parent route here
          },
        },
        {
          path: '/sports',
          name: 'sports',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Sports.vue'),
          meta: {
            title: 'Sports', // Add the title for the parent route here
          },
        },
        {
          path: '/lifestyle',
          name: 'lifestyle',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Lifestyle.vue'),
          meta: {
            title: 'Lifestyle', // Add the title for the parent route here
          },
        },
        {
          path: '/health',
          name: 'health',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/Health.vue'),
          meta: {
            title: 'Health', // Add the title for the parent route here
          },
        },


    

    ]
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
