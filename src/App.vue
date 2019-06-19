<template>
  <div id="app">
    <Header />
    <Content
      msg="Natural"
      msg2="vive la experiencia"
      img="https://image.freepik.com/foto-gratis/campo-fresas_1203-7581.jpg"
    />
    <Content
      msg="Jugos"
      msg2="prueba todos los sabores"
      img="https://sonaesierracms-v2.cdnpservers.net/wp-content/uploads/sites/28/2018/04/zumos-de-frutas-naturales.jpg"
    />
    <Content
      msg="Mermeladas"
      msg2="Revive aromas"
      img="http://wemapu.cl/wp/wp-content/uploads/2016/06/008-Mermeladas.jpg"
    />
    <Content
      msg="Pulpas"
      msg2="Insumos de calidad"
      img="http://www.lonatural.com.mx/wp-content/uploads/2015/11/fondo-pulpa.jpg"
    />
    <Clients />
    <Production msg="Producción" />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Clients from "./components/Clients/Clients.vue";
import Production from "./components/Production/Production";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Content,
    Clients,
    Production,
    Contact,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Asap&display=swap");
* {
  margin: 0;
  font-family: "Asap", sans-serif;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
}
</style>
