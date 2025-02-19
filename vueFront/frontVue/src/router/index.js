import { createRouter, createWebHistory } from 'vue-router';

import CreateEmergency from '../components/createEmergency.vue';
import emergenciesList from '../components/emergenciesList.vue';
import EditEmergency from '../components/EditEmergency.vue';


import App from '../App.vue';

const routes = [
  { path: '/createEmergencia', name: 'createEmergency', component: CreateEmergency },
  { path: '/home', component: App },
  { path: '/listEmergencia', name: 'listEmergencia', component: emergenciesList },
  { path: '/editEmergencia/:id', name: 'editEmergencia', component: EditEmergency}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
