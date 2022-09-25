<script>
export default{
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
