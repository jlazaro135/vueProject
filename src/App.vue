<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Form from './components/Form.vue'
import Ods from './components/Ods.vue'
import Character from './components/Character.vue';
import Resume from './components/Resume.vue';
export default{
  components: {
    Form,
    Ods,
    Character,
    Resume
}
}

</script>

<template>
  <div class="container">
    <Form></Form>
    <Ods></Ods>
    <Character></Character>
    <Resume></Resume>
  </div>
</template>

<style scoped>
  .container{
    min-height: 10000px
  }
</style>
