<script>
import Button from './Button.vue';
  export default {
    name: "Animals",
    components:{
    Button
},
    props: {
    },
    data(){
      return {
        arrSrc: [],
        dataOds: null,
        error: null,
      }
    },
    methods: {
    imagePath: function(id){
      return `img/pic-${id}.jpg`;
    },
    SelectOds(e){
      this.error = null
      let url = e.target.src.substring(e.target.src.lastIndexOf('/'))
      if(this.arrSrc.length < 3 || this.arrSrc.includes(url)){
        if(!this.arrSrc.includes(url)){
        this.arrSrc = [...this.arrSrc, url]
        e.target.classList.add('selected')
        return
        }
      this.arrSrc.splice(this.arrSrc.indexOf(url), 1)
      e.target.classList.remove('selected')
      }
      if(this.arrSrc.length === 3){
        this.error = 'Has elegido el máximo de animales posibles. Si deseas cambiar de animal, primero deselecciona uno de los seleccionados'
        window.scrollTo(0, 0);
      }
    },
    checkSelection(){
      if(this.arrSrc.length >= 1){
        let dataOds = {
          'dataOds': this.arrSrc
        }
        localStorage.setItem('dataOds', JSON.stringify(dataOds))
        window.location.href= '/#/personaje-favorito'
      }
      this.error = 'Elige al menos un animal';
      window.scrollTo(0, 0);
    }
  }
}
  </script>
  
  <template>
    <h2>Animales</h2>
    <p>Seleccciona como mínimo un animal y como máximo tres</p>
    <div v-if="this.error" class="alert alert-danger alert-dismissible">{{ error }}</div>
    <div class="grid">
        <img v-for="i in 12" :key="i" :src="imagePath(i)" @click="SelectOds" :alt="'ods'+ (i)" width="100" height="100">
    </div>
    <Button @click="checkSelection" textButton="Siguiente paso"></Button>
  </template>
  
  <style scoped>
    p{
      margin: 1rem 0
    }
    .grid{
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 1rem;
    }
    img{
        width: 100%;
        background-color: #cacaca;
        max-width: 100%;
        filter: grayscale(1) opacity(0.6);
        height: auto;
        cursor: pointer;
        box-shadow: 0 0 rgba(56, 56, 56, 0.88);
    }
    img:hover{
        transition: all 0.5s;
        filter: grayscale(0.3);
        transform: translate(-8px, -8px);
        box-shadow: 8px 8px rgba(253, 210, 18, 0.88);
    }
    .selected{
        filter: grayscale(0) saturate(1.2);
        transform: translate(-8px, -8px);
        box-shadow: 8px 8px rgba(112, 255, 99, 0.88);
    }
    .selected:hover{
        filter: grayscale(0);
        box-shadow: 8px 8px rgba(112, 255, 99, 0.88);
    }
  </style>
  