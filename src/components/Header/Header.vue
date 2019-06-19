<template>
  <header>
    <h1 class="h1-title">SANKYTOK</h1>
    <a href="#contact-info">Contacto</a>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
}

.h1-title{
  display: inline-block;
  padding: 30px;
  margin-left: 226px;
}

a {
  color: #ffffff;
  float: right;
  font-size: 16px;
  margin: 37px 160px 0 0;
  text-decoration: none;
  font-weight: 100;
}
</style>
