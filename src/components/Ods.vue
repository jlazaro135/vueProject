<script>
import MyButton from './MyButton.vue';
  export default {
    name: "Ods",
    components:{
    MyButton
},
    props: {
    },
    data(){
      return {
      }
    },
    methods: {
    image_path: function(id){
      return `src/assets/img/S-WEB-Goal-${id}.png`;
    }
  }
}
  </script>
  
  <template>
    <h2>Objetivos de desarrollo sostenible</h2>
    <div class="grid">
        <img v-for="i in 17" :key="i" :src="image_path(i)" alt="ods">
    </div>
    <MyButton textButton="Siguiente paso"></MyButton>
  </template>
  
  <style scoped>
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
        filter: grayscale(0);
        transform: translate(-8px, -8px);
        box-shadow: 8px 8px rgba(56, 56, 56, 0.88);
    }

  </style>
  