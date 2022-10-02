import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Form from './components/Form.vue'
import Animals from './components/Animals.vue'
import Character from './components/Character.vue'
import Resume from './components/Resume.vue'
import Home from './components/Home.vue'


// definir objetos rutas 
const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/contacto', component: Form
    },
    {
        path: '/animales', component: Animals
    },
    {
        path: '/personaje-favorito', component: Character
    },
    {
        path: '/resumen', component: Resume
    }
]

// crear objeto rutas vue router -- objeto VR
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// instancia de Vue
const app = createApp(App)
app.use(router)

app.mount('#app')
