<script>
export default {
  name: "MyButton",
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
      default: "submit",
    }
  }
}
</script>

<template>
  <button :class="btnClass" :type="event">{{textButton}}</button>
</template>

<style scoped>
button{
  transition: all 0.2s ease-in;
  min-width: 300px;
}
.primary{
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
