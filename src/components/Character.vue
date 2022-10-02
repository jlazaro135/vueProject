<script>
  import { onBeforeMount } from 'vue'
import Button from './Button.vue'
  const API_URL= 'https://futuramaapi.herokuapp.com/api/v2/characters'
  export default {
    name: "Character",
    components:{
      Button
    },
    props: {
    },
    data(){
      return {
        finalData: [],
        speices: "Nombre por defecto",
        img: null,
        description: "Esto es la descripción",
        change: false,
        error: null,
      }
    },
    methods: {
      onChange(e) {
            this.error = null
            this.index = e.target.options[e.target.selectedIndex].dataset.key
            this.name = this.finalData[this.index].Name
            this.speices = this.finalData[this.index].Species
            this.img = this.finalData[this.index].PicUrl
            this.description = this.finalData[this.index].Profession
            this.change = true
        },
      checkSelection(){
        if(!this.change){
          this.error = 'Elige tu personaje favorito'
          return
        }
        let dataCharacter = {
          'img': this.img,
          'name': this.name
        }
        localStorage.setItem('dataCharacter', JSON.stringify(dataCharacter))
        window.location.href = '#/resumen'
      },
      selectDefault(){

      }
    },
    async created() { 
    const response = await fetch(API_URL);
    const data = await response.json();
    this.finalData = data
  }
}
  </script>
  
  <template>
    <div v-if="this.error" class="alert alert-danger">{{error}}</div>
    <h2>Personaje de Futurama</h2>

    <select @change="onChange($event)" name="character" id="char" class="classic">
      <option selected disabled>Selecciona una opción</option>
      <option v-for="(data, index) in finalData" :key="index" :data-key="index">{{data.Name}}</option>
    </select>

    <div class="card" v-if="change">
      <div class="card-body">
        <img :src="img"  alt="">
        <p><strong>Especie:</strong> {{speices}}</p>
        <p><span><strong>Trabajo: </strong></span> {{description}}</p>
      </div>
    </div>
    <Button textButton="Ir a Resumen" @click="checkSelection"></Button>

  </template>
  
  <style scoped>
    select{
      min-width: 300px;
      background-color: white;
      border: thin solid #ef3e34;
      border-radius: 4px;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;
      margin: 0;      
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    select.classic {
    background-image:
      linear-gradient(45deg, transparent 50%, #ef3e34 50%),
      linear-gradient(135deg, #ef3e34 50%, transparent 50%),
      linear-gradient(to right, #ffa8a3, #ffa8a3);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      100% 0;
    background-size:
      5px 5px,
      5px 5px,
      2.5em 2.5em;
    background-repeat: no-repeat;
      }
    select:active, select:focus{
      outline: none;  
    }
    .card{
      max-width: 400px;
      margin: 3rem auto;
      position: relative;
      animation: fade-in 0.5s ease-in;
    }

    @keyframes fade-in {
      from {top: -20px; opacity: 0;}
      to {top: 0; opacity: 1;}
    }

    select option{
      padding: 1rem 0;
    }

    img{
      width: auto;
      max-height: 300px;
      max-width: 100%;
      margin-bottom: 1rem;
    }
    span {
      display: block;
    }

    Button{
      display: block;
      margin: 2rem auto!important;;
    }

  </style>
  