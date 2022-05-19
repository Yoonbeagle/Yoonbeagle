import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Example from '../ExampleList.vue'
import ClickEvt from '../views/ClickEvt.vue' // 전역 등록
import Carousel from '../views/Carousel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/example',
  //   name: 'Example',
  //   component: Example,
  //   children: [
  //     {
  //       path: 'clickToggle',
  //       name: 'ClickEvt',
  //       component: ClickEvt
  //     },
  //     {
  //       path: 'listArray',
  //       name: 'ListArray',
  //       component: () => import(/* webpackChunkName: "listArray" */ '../views/ListArray.vue')
  //     },
  //     {
  //       path: 'accordion',
  //       name: 'Accordion',
  //       component: () => import(/* webpackChunkName: "accordion" */ '../views/Accordion.vue')
  //     },
  //     {
  //       path: 'forEach',
  //       name: 'ForEach',
  //       component: () => import(/* webpackChunkName: "forEach" */ '../views/ForEach.vue')
  //     },
  //     {
  //       path: 'carousel',
  //       name: 'Carousel',
  //       component: Carousel
  //     },
  //     {
  //       path: 'tempIntemp',
  //       name: 'tempIntemp',
  //       component: () => import(/* webpackChunkName: "tempIntemp" */ '../views/tempIntemp.vue')
  //     },
  //     {
  //       path: 'doubleClick',
  //       name: 'DoubleClick',
  //       component: () => import(/* webpackChunkName: "dubleClick" */ '../views/DoubleClick.vue')
  //     },
  //     {
  //       path: 'forinfor',
  //       name: 'ForInFor',
  //       component: () => import(/* webpackChunkName: "forinfor" */ '../views/ForInFor.vue')
  //     },
  //     {
  //       path: 'foldingArea',
  //       name: 'FoldingArea',
  //       component: () => import(/* webpackChunkName: "foldingArea" */ '../views/FoldingArea.vue')
  //     },
  //     {
  //       path: 'modal',
  //       name: 'Modal',
  //       component: () => import(/* webpackChunkName: "modal" */ '../views/Modal.vue')
  //     },
  //     {
  //       path: 'ref',
  //       name: 'Ref',
  //       component: () => import(/* webpackChunkName: "ref" */ '../views/Ref.vue')
  //     }
  //   ]
  // }
  {
    path: '/',
    name: 'Main',
    component: Example
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    path: './clickToggle',
    name: 'ClickEvt',
    component: ClickEvt
  },
  {
    path: '/listArray',
    name: 'ListArray',
    component: () => import(/* webpackChunkName: "listArray" */ '../views/ListArray.vue')
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: () => import(/* webpackChunkName: "accordion" */ '../views/Accordion.vue')
  },
  {
    path: '/forEach',
    name: 'ForEach',
    component: () => import(/* webpackChunkName: "forEach" */ '../views/ForEach.vue')
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel
  },
  {
    path: '/tempIntemp',
    name: 'tempIntemp',
    component: () => import(/* webpackChunkName: "tempIntemp" */ '../views/tempIntemp.vue')
  },
  {
    path: '/doubleClick',
    name: 'DoubleClick',
    component: () => import(/* webpackChunkName: "dubleClick" */ '../views/DoubleClick.vue')
  },
  {
    path: '/forInfor',
    name: 'ForInFor',
    component: () => import(/* webpackChunkName: "forInfor" */ '../views/ForInFor.vue')
  },
  {
    path: '/foldingArea',
    name: 'FoldingArea',
    component: () => import(/* webpackChunkName: "foldingArea" */ '../views/FoldingArea.vue')
  },
  {
    path: '/vModel',
    name: 'vModel',
    component: () => import(/* webpackChunkName: "modal" */ '../views/vModel.vue')
  },
  {
    path: '/select',
    name: 'select',
    component: () => import(/* webpackChunkName: "modal" */ '../views/select.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/Modal.vue')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import(/* webpackChunkName: "ref" */ '../views/Ref.vue')
  },
  {
    path: '/eventbus',
    name: 'EventBus',
    component: () => import(/* webpackChunkName: "EventBus" */ '../views/EvtBus.vue')
  },
  {
    path: '/boardList',
    name: 'Board',
    component: () => import(/* webpackChunkName: "Board" */ '../views/board.vue')
  },
  {
    path: '/boardWrite',
    name: 'BoardWrite',
    component: () => import(/* webpackChunkName: "BoardWrite" */ '../views/boardWrite.vue')
  },
  {
    path: '/props-emit',
    name: 'Props',
    component: () => import(/* webpackChunkName: "BoardWrite" */ '../views/Props.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
