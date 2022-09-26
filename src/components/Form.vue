<script>
  import Button from './Button.vue'
  export default {
    name: "Form",
    components:{
      Button
    },
    data(){
      return {
        errors: [],
        dataContact: null,
        name: null,
        surname: null,
        comments: null,
      }
    },
    methods:{
      checkForm: function () {
        if (this.name && this.surname) {
          this.dataContact = {
            'name': this.name,
            'surname': this.surname,
            'comments': this.comments
          }
          localStorage.setItem('dataContact', JSON.stringify(this.dataContact))
          window.location.href = '/#/objetivos-desarrollo'
        }

        this.errors = [];

        if (!this.name) {
          this.errors.push('El nombre es obligatorio.');
        }
        if (!this.surname) {
          this.errors.push('El apellido es obligatorio.');
        }
      }
    }
  }
</script>

<template>
  <h2>Formulario de contacto</h2>

  <div class="form-wrapper">
    <div v-if="errors.length" class="alert alert-danger">
    <b>Los siguientes datos son necesarios:</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>
  
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
  </div>
  
  <Button @click="checkForm" textButton="Siguiente paso"></Button>
</template>

<style scoped>
.form-wrapper{
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

ul{
  list-style: none;
}
</style>
