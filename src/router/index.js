import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Home from '@/views/home.vue'
import Background from '@/views/background'
import Right_side from '@/views/Background/right_side'
import Right_side1 from '@/views/background/right_side1'
import Background_Index from '@/views/background/background_index'
import Agency from '@/views/Agency/agency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	path:'/home',
    	name:'Home',
    	component: Home
    },
    {
      path:'/background',
      name:'Background',
      component:Background,
      children:[
        {
          path:'foo',component: Right_side
        },
        {
          path:'bar', component:Right_side1
        },
        {
          path:'background_index',component:Background_Index
        }
      ]
    },
    {
        path:'/agency',
        name:'Agency',
        component: Agency
    }
  ]
})
