import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve)
    },
    {
      path: '/componentA',
      name: 'componentA',
      component: resolve => require(['@/components/ComponentA'],resolve)
    },
    {
      path: '/componentB',
      name: 'componentB',
      component: resolve => require(['@/components/ComponentB'],resolve)
    },
    {
      path: '/componentC',
      name: 'componentC',
      component: resolve => require(['@/components/ComponentC'],resolve)
    },
    {
      path: '/componentD',
      name: 'componentD',
      component: resolve => require(['@/components/ComponentD'],resolve)
    }
  ],
})
