<template>
  <clients>
    <h5-gray>NUESTROS CLIENTES</h5-gray>
    <logo
      src="https://brandia.com.mx/wp-content/uploads/2015/01/Logo-Swarovski_Crystal.png"
    />
    <logo
      src="http://cuntoto.usac.edu.gt/wp-content/uploads/2017/03/logo-cuntoto-pro-est%C3%A1ndar-escala-de-grises-1.png"
    />
    <logo
      src="https://brandia.com.mx/wp-content/uploads/2015/01/Logo-Swarovski_Crystal.png"
    />
    <logo
      src="http://cuntoto.usac.edu.gt/wp-content/uploads/2017/03/logo-cuntoto-pro-est%C3%A1ndar-escala-de-grises-1.png"
    />
    <logo
      src="https://brandia.com.mx/wp-content/uploads/2015/01/Logo-Swarovski_Crystal.png"
    />
  </clients>
</template>

<script>
import { ContClientes, Logo } from "./Clientes";
import { h5Gray } from "./../Production/Produccion";
export default {
  name: "Clients",
  components: {
    clients: ContClientes,
    logo: Logo,
    "h5-gray": h5Gray
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
