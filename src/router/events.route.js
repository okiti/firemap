export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue'),
  },
  {
    path: '/events/new',
    name: 'AgendaWizardEventDetails',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(
        /* webpackChunkName: "agendaWizardEventDetails" */ '../views/Event/New.vue'
      ),
  },
  {
    path: '/events/:eventId',
    name: 'Event',
    component: () => import(/* webpackChunkName: "EventAgenda" */ '../views/Event/Index.vue'),
  },
  {
    path: '/events/:eventId/item/:itemId',
    name: 'AgendaItemDetails',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "AgendaItemDetails" */ '../views/Event/ViewAgendr.vue'),
  },
  {
    path: '/events/:eventId/modify',
    name: 'ModifyEvent',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(/* webpackChunkName: "agendaWizardAgendaItems" */ '../views/Event/Modify.vue'),
  },
  {
    path: '/events/:eventId/agenda',
    name: 'AgendaWizardAgendaItems',
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import(
        /* webpackChunkName: "agendaWizardAgendaItems" */ '../views/Event/CreateAgenda.vue'
      ),
  },
];
