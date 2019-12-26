import Index from './views/Index.vue';
import Login from './views/Login.vue';
import SignUp from './views/SignUp.vue';

export default [
  // Redirects to /route-one as the default route.
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index//,
    // Children is just another route definition of sub-routes.
    // children: [
    //   {
    //     // Note: No leading slash. This can trip people up sometimes.
    //     path: 'route-one-child',
    //     component: RouteOneChild
    //   }
    // ]
  },
  {
      path: '/login',
      name: 'login',
      component: Login
  },
  {
      path: '/signup',
      name: 'signup',
      component: SignUp
  }
//   {
//     // Route two takes the route parameter "id".
//     // The parameter value can be accessed with $route.params.id in the RouteTwo component.
//     path: '/route-two/:id',
//     component: RouteTwo
//   }
];