<template>
  <div id="app">
    <Header />
    <Content
      msg="Inmobiliaria"
      msg2="vive la altura"
      img="https://user-images.githubusercontent.com/45070947/58738765-c862dc80-83cc-11e9-9831-510ee1b611de.jpg"
    />
    <Content
      msg="Construcción"
      msg2="Tenlo todo bajo control"
      img="https://user-images.githubusercontent.com/45070947/58739853-41186780-83d2-11e9-95c0-574032ee5894.jpg"
    />
    <Content
      msg="Eventos"
      msg2="Revive experiencias"
      img="https://c.pxhere.com/photos/4f/4c/festival_fun_fair_lights_fun_joy_evening_travel_tourism-799662.jpg!d"
    />
    <Content
      msg="Minería"
      msg2="Visualiza el éxito"
      img="https://user-images.githubusercontent.com/45070947/58739814-f696eb00-83d1-11e9-87db-aecf2ea7b48f.jpg"
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
