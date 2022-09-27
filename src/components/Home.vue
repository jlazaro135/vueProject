<script>
  
    export default {
      name: "Home",
      methods:{
        destroyData(){
            let itemsToremove = ['dataCharacter', 'dataContact', 'dataOds']
            itemsToremove.forEach(item => localStorage.removeItem(item))
        }
      },
      beforeMount(){
        this.destroyData()
      }
    }
    </script>
    
    <template>
        <h2>Prueba Frontend: APP en Vue</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="logo-Vue">
        <img class="ciber-logo" src="https://st1.cibervoluntarios.org/images/logo-sm-en-2021.png" alt="logo-Vue">
        <p>La prueba consiste en un formulario desarrollado en Vue que funciona en 4 pasos: </p>
        <ol>
            <li><b>Datos Básicos:</b> Nombre(Obligatorio), Apellidos(Obligatorio), Observaciones.</li>
            <li><b>ODSs Favoritos:</b> En una cuadrícula con todos los ODS hay que seleccionar como mínimo 1 y como máximo 3, te adjunto un zip de assets (Obligatorio, claro, tiene un mínimo de selección)</li>
            <li><b>Personaje Favorito de Futurama:</b> Para esto tienes que usar la api <a href="https://futuramaapi.herokuapp.com">https://futuramaapi.herokuapp.com/</a>, simplemente seleccionar de un desplegable cuál es tu personaje favorito (si ves que la api no te funciona o cualquier cosa avísame y te paso otra)</li>
            <li><b>Resumen:</b> Una vista donde puedo ver toda la selección.</li>
        </ol>
        <router-link to="/contacto" class="start">Comenzar formulario</router-link>
    </template>
    
    <style scoped>
      img{
        margin-top: 2rem;
        max-width: 150px;
      }
      img:hover{
        filter: drop-shadow(0 0 25px #68daa7);
        transition: all 0.3s;
      }
      ol{
        max-width: 600px;
        text-align: left;
        margin: 0 auto;
      }
      li{
        margin: 1rem 0;
      }
      p{
        margin-top: 2rem;
      }
      .start{
        display: inline-block;
        margin-top: 1rem;
        background-color: #68daa7;
        padding: 1rem;
        border-radius: 0.5rem;
        color: #fff;
      }
      .start:hover{
        background-color: #229c65;
        transition: all 0.3s;
      }
      .ciber-logo{
        max-width: 300px;
      }
      .ciber-logo:hover{
        filter: drop-shadow(0 0 25px #ff9483);
        transition: all 0.3s;
      }
  
    </style>
    