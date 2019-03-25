import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'


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
  }]


})

/* router.beforeEach(function(to,from,next){

/* console.group('路由跳转之前')
console.log(to)
console.log(from)
console.log(next)
console.groupEnd()
next();
 

}); */
export default router;




