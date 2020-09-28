export default [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true,
    },
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "profile" */ '../views/profile/profile.vue'),
  },
  {
    path: '/profile/edit',
    name: 'edit profile',
    meta: {
      requiresAuth: true,
    },
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "profile" */ '../views/profile/editprofile.vue'),
  },
  {
    path: '/profile/changePassword',
    name: 'change password',
    meta: {
      requiresAuth: true,
    },
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "profile" */ '../views/profile/changePassword.vue'),
  },
];
