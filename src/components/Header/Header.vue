<template>
  <header>
    <img
      src="https://user-images.githubusercontent.com/45070947/58676873-7d3ec000-831f-11e9-88c0-f464c09325f5.png"
      alt="logo-Hoverit"
      class="logo"
    />
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

.logo {
  margin: 30px 0 0 235px;
  width: 175px;
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
