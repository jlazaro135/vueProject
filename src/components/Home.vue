<script>
    import {checkComments} from '../assets/js/utils'
    let dataContact = JSON.parse(localStorage.dataContact)
    let dataOds = JSON.parse(localStorage.dataOds)
    let dataCharacter = JSON.parse(localStorage.dataCharacter)
  
    export default {
      name: "Resume",
      props: {
      },
      data(){
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
        return `src/assets/img${path}`;
        },
      },
    }
    </script>
    
    <template>
        <h2>Prueba Frontend: APP en Vue</h2>
        <img src="" alt="">
        
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
    