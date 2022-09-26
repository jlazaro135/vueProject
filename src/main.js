import { createApp, VueElement } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import Form from './components/Form.vue'

// Componentes

const Detail = {template: '<h2>Esto es una vista de detalles</h2>'}


// definir objetos rutas 
const routes = [
    {
        path: '/', component: Form
    },
    {
        path: '/detalle', component: Detail
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
