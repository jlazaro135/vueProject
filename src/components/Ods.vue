<script>
import Button from './Button.vue';
  export default {
    name: "Ods",
    components:{
    Button
},
    props: {
    },
    data(){
      return {
        arrImg: [],
      }
    },
    methods: {
    imagePath: function(id){
      return `src/assets/img/S-WEB-Goal-${id}.png`;
    },
    SelectOds(e){
      if(this.arrImg.length < 3 || this.arrImg.includes(e.target.alt)){
        if(!this.arrImg.includes(e.target.alt)){
        this.arrImg.push(e.target.alt)
        e.target.classList.add('selected')
        console.log(this.selected)
        return
        }
      this.arrImg.splice(this.arrImg.indexOf(e.target.alt), 1)
      e.target.classList.remove('selected')
      }
    }
  }
}
  </script>
  
  <template>
    <h2>Objetivos de desarrollo sostenible</h2>
    <p>Seleccciona como mínimo un objetivo y como máximo tres</p>
    <div class="grid">
        <img v-for="i in 17" :key="i" :src="imagePath(i)" @click="SelectOds" :alt="'ods'+ (i)">
    </div>
    <Button textButton="Siguiente paso"></Button>
  </template>
  
  <style scoped>
    p{
      margin: 1rem 0
    }
    .grid{
        width: 100%;
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 1rem;
    }
    img{
        max-width: 100%;
        filter: grayscale(1);
        height: auto;
        cursor: pointer;
        box-shadow: 0 0 rgba(56, 56, 56, 0.88);
    }
    img:hover{
        transition: all 0.5s;
        filter: grayscale(0.5);
        transform: translate(-8px, -8px);
        box-shadow: 8px 8px rgba(56, 56, 56, 0.88);
    }
    .selected{
        filter: grayscale(0);
        transform: translate(-8px, -8px);
        box-shadow: 8px 8px rgba(56, 56, 56, 0.88);
    }
    .selected:hover{
        filter: grayscale(0);
    }
  </style>
  