import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Detail from './views/Detail.vue'
import Cart from './views/List.vue'
//import Home from './views/Home.vue'

Vue.use(Router);


const router=new Router({

  routes:[{

     path:'/login',
     name:'Login',
     component:Login

  },{
      path:'/reg',
      name:'Reg',
      component:Reg
  },{
    path:'/detail',
    name:'Detail',
    component:Detail,
  },{
    path:'/cart',
    name:'Cart',
    component:Cart,
  },/* {
    path:'/',
    name:'Home',
    component:Home,
} */]


})


export default router;




