<script>
  import {checkComments} from '../assets/js/utils'
  export default {
    name: "Resume",
    props: {
    },
    data(){
      let dataContact = JSON.parse(localStorage.dataContact)
      let dataOds = JSON.parse(localStorage.dataOds)
      let dataCharacter = JSON.parse(localStorage.dataCharacter)
      return {
        name: dataContact.name,
        surname: dataContact.surname,
        comments: checkComments(dataContact.comments, 'No hay observaciones'),
        ods: dataOds.dataOds,
        characterName: dataCharacter.name,
        characterImg: dataCharacter.img
      }
    },
    methods: {
      imagePath: function(path){
      return `/img${path}`;
      },
    },
  }
  </script>
  
  <template>
    <router-link class="link" to="/">Ir a Inicio</router-link>
    <router-link class="link" to="/contacto">Ir a datos contacto</router-link>
    <router-link class="link" to="/animales">Ir a animales</router-link>
    <router-link class="link" to="/personaje-favorito">Ir a personaje favorito</router-link>
    <h2>Resumen</h2>

    <div class="wrapper">
      <h5>Datos de contacto</h5>
      <p><span><strong>Nombre y apellidos:</strong></span> {{ name }} {{ surname}}</p>
      <p><span><strong>Observaciones:</strong></span> {{ comments }}</p>
    </div>

    <div class="wrapper">
      <h5>Animales seleccionados</h5>
      <div class="grid">
        <img v-for="index in ods.length" :key="index" :src="imagePath(ods[index-1])" alt="ods">
      </div>
    </div>

    <div class="wrapper">
      <h5>Personaje Favorito</h5>
      <h4>{{characterName}}</h4>
      <div class="card">
        <div class="card-body">
            <img :src="characterImg" alt="">
        </div>
      </div>
    </div>
      

  </template>
  
  <style scoped>
    .wrapper{
      padding: 1rem;
      border: 1px solid #000;
      max-width: 900px;
      margin: 2rem auto;
      position: relative;
    }
    h5{
      position: absolute;
      top: -15px;
      left: 10px;
      background-color: #fff;
      padding: 0 1rem;
    }
    span{
      display: block;
    }

    .grid{
      padding: 1rem;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(3, 1fr);
    }

    .grid img{
      width: 100%;
    }

    .card{
      max-width: 500px;
      margin: 0 auto;
    }

    .card img{
      width: auto;
      max-height: 300px;
      max-width: 100%;
      margin-bottom: 1rem;
    }

    img{
      filter: saturate(1.2);
    }

    .link{
      display: inline-block;
      margin: 1rem 1rem;
      text-decoration: underline;
    }
  </style>
  