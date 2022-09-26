import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Form from './components/Form.vue'
import Ods from './components/Ods.vue'
import Character from './components/Character.vue'
import Resume from './components/Resume.vue'


// definir objetos rutas 
const routes = [
    {
        path: '/contacto', component: Form
    },
    {
        path: '/objetivos-desarrollo', component: Ods
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
