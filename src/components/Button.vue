<script>
export default {
  name: "Button",
  props: {
    textButton: {
      type: String,
      default: "boton",
    },
    btnClass: {
      type: String,
      default: "primary",
    },
    event: {
      type: String,
      default: "",
    },
  }
}
</script>

<template>
  <button :class="btnClass" @click="event">{{textButton}}</button>
</template>

<style scoped>
button{
  text-transform: uppercase;
  font-size: 1.2rem;
  transition: all 0.2s ease-in;
  max-width: 400px;
}
.primary{
  margin: 2rem 0;
  background-color: #ef3e34;
  border-color: #ef3e34;
  color: #fff;
}
.primary:hover{
  background-color: #c9302c;
  border-color: #c9302c;
}
.primary:active, .primary:focus{
  outline: 0;
  background-color: #9e201c;
  border-color: #9e201c;
}
</style>
