<script>
  export default {
    name: "Resume",
    props: {
    },
    data(){
      return {
        finalData: [],
        speices: "Nombre por defecto",
        img: "https://vignette.wikia.nocookie.net/en.futurama/images/f/f2/PhilipJ.Fry.png/revision/latest?cb=20110916120042",
        description: "Esto es la descripción",
        change: false
      }
    },
    methods: {
    },
  }
  </script>
  
  <template>
    <h2>Resumen</h2>

    <div class="wrapper">
      <h5>Datos de contacto</h5>
      <p><span><strong>Nombre y apellidos:</strong></span> Fulano de tal</p>
      <p><span><strong>Observaciones:</strong></span> Esto es una prueba de Vue y tal y cual</p>
    </div>

    <div class="wrapper">
      <h5>Objetivos seleccionados</h5>
      <div class="grid">
        <img src="../assets/img/S-WEB-Goal-1.png" alt="">
        <img src="../assets/img/S-WEB-Goal-1.png" alt="">
        <img src="../assets/img/S-WEB-Goal-1.png" alt="">
      </div>
    </div>

    <div class="wrapper">
      <h5>Personaje Favorito</h5>
      <h4>Frai</h4>
      <div class="card">
        <div class="card-body">
            <img src="https://vignette.wikia.nocookie.net/en.futurama/images/f/f2/PhilipJ.Fry.png/revision/latest?cb=20110916120042" alt="">
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

  </style>
  