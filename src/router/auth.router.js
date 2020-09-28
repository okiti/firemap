export default [
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "signup" */ '../views/auth/Join.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "signin" */ '../views/auth/Login.vue'),
  },
  {
    path: '/password/request',
    name: 'RequestPasswordReset',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(
        /* webpackChunkName: "requestPasswordReset" */
        '../views/auth/PasswordResetRequest.vue'
      ),
  },
  {
    path: '/password/reset',
    name: 'ResetPassword',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "resetPassword" */ '../views/auth/PasswordReset.vue'),
  },
];
