
//Importa las vistas y los componentes asosciados a cada ruta
import Vue from 'vue'
import VueRouter from 'vue-router'

//Imports each of the pages 
import AboutPage from '../views/AboutPage.vue';
import BlogPage from '../views/BlogPage.vue';
import ContactPage from '../views/ContactPage.vue';
import HomePage from '../views/HomePage.vue';
import ServicesPage from '../views/ServicesPage.vue';

Vue.use(VueRouter)

//Se construyen las rutas asociadas a cada pagina, vista y/o componente
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/about',
    name: 'About',
    component: AboutPage,
  }, {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
  }, {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  }, {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },{
    path: '/',
    redirect: '/home',
  }, {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
