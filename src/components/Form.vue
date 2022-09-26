<script>
  import MyButton from './MyButton.vue'
export default {
  name: "Form",
  components:{
    Button: MyButton
  },
  data(){
    return {
      errors: [],
      name: null,
      surname: null,
      comments: null,
      link: '#'
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.surname) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('El nombre es obligatorio.');
        this.link = '#'
      }
      if (!this.surname) {
        this.errors.push('La edad es obligatoria.');
        this.link = '#'
      }

      this.link = '/objetivos-desarrollo'
      e.preventDefault();
    }
  }
}
</script>

<template>
  <h2>Formulario de contacto</h2>

  <p v-if="errors.length">
    <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

    <div>
      <label class="form-label" for="name">Nombre <small>(obligatorio)</small></label>
      <input
      class="form-control"
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
    </div>

    <div>
      <label class="form-label" for="surname">Apellidos <small>(obligatorio)</small></label>
      <input
        class="form-control"
        id="surname"
        v-model="surname"
        type="text"
        name="surname"
      >
    </div>

    <div>
      <label class="form-label" for="comments">Observaciones</label>
      <textarea
        class="form-control"
        id="comments"
        v-model= "comments"
        name="comments"
        maxlength="250"
      >
      </textarea>
    </div>

    
      <router-link @click="checkForm" :to="link">Esto es un click</router-link>
    <Button textButton="Siguiente paso">
    </Button>
  
</template>

<style scoped>
form{
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem
}

label{
  margin: 0;
  font-weight: 500;
  color: gray;
}

input:active, textarea:active,
input:focus, textarea:focus{
  outline: 0;
  box-shadow: none;
  border-color: #ef3e34;
}

div textarea{
  min-height: 200px;
  max-height: 300px;
}

small{
  font-size: 0.7rem;
  font-weight: 400;
  display: block;
}

</style>
