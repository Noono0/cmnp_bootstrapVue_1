import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'
import Status from '@/components/Status'
import test from '@/components/test'
import Login from '@/components/Login' 
import Jubsu from '@/components/Jubsu'
import Option from '@/components/Option'
import Depart from '@/components/Depart'
import Arrive from '@/components/Arrive'
import Order from '@/components/Order'
import Order_Detail from '@/components/Order_Detail'


Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export default new Router({
  routes: [
    {
    path:'/',
    name: 'Read',
    component:Read
  },
  {
    path:'/create',
    name:'Create',
    component:Create
  },
  // {
  //   path: '/Detail/:contentId',
  //   name: 'Detail',
  //   component:Detail
  // }
,
 {
    path: '/Detail',
    name: 'Detail',
    component:Detail
  }
  ,
 {
    path: '/Status',
    name: 'Status',
    component:Status
  }
  ,
  {
     path: '/test',
     name: 'test',
     component:test
   }
   ,
   {
     path:'/Login',
     name:'Login',
     component:Login
   }
   ,
   {
     path:'/Jubsu',
     name:'Jubsu',
     component:Jubsu
   }
   ,
   {
     path:'/Option',
     name:'Option',
     component:Option
   }
   ,
   {
     path:'/Depart',
     name:'Depart',
     component:Depart
   }
   ,
   {
     path:'/Arrive',
     name:'Arrive',
     component:Arrive
   }
   ,
   {
     path:'/Order',
     name:'Order',
     component:Order
   }
   ,
   {
     path:'/Order_Detail',
     name:'Order_Detail',
     component:Order_Detail
   }

  ]

})

Order_Detail