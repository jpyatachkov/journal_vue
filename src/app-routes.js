import Index from './views/Index.vue';
import AttendanceToday from './views/AttendanceToday.vue'
import AttendanceTotal from './views/AttendanceTotal.vue'

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
    path: '/attendance_today',
    name: 'attendance_today',
    component: AttendanceToday
  },
  {
    path: '/attendance_total',
    name: 'attendance_total',
    component: AttendanceTotal
  }
//   {
//     // Route two takes the route parameter "id".
//     // The parameter value can be accessed with $route.params.id in the RouteTwo component.
//     path: '/route-two/:id',
//     component: RouteTwo
//   }
];