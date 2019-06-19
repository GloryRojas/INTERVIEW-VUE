<template>
  <Container
    url="https://user-images.githubusercontent.com/45070947/58756790-c714db00-84c4-11e9-9199-92fba37fc534.png"
  >
    <content-info id="contact-info">
      <h1-contact>Contacto</h1-contact>
      <h4-contact v-if="showMessage">Cambia la forma de hacer las cosas, <span-hab v-on:click="changeVisibility">hablemos.</span-hab></h4-contact>
      <p-info-contact><i class="fas fa-phone"></i> 01 775 xxxx</p-info-contact>
      <p-info-contact><i class="fas fa-location-arrow"></i> hola@sankytok.com</p-info-contact>
      <p-info-contact><i class="fas fa-flag"></i> Calle Las Fresas 491 - Pte Piedra - Lima</p-info-contact>
    </content-info>
    <content-info v-if="showForm">
      <h4-contact>¡Déjanos un mensaje!</h4-contact>
      <form-contact>
        <input-contact type="text" placeholder="Nombre"></input-contact>
        <input-contact type="text" placeholder="Teléfono"></input-contact>
        <input-contact type="text" placeholder="Mensaje"></input-contact>
        <button-contact v-on:click="changeVisibility">ENVIAR <i class="fas fa-long-arrow-alt-right"></i> </button-contact>
      </form-contact>
    </content-info>
  </Container>
</template>

<script>
import { Container } from "./../Content/Utils";
import {
  ContentInfo,
  PInfoContact,
  h1Contact,
  h4Contact,
  FormContact,
  InputContact,
  ButtonContact,
  SpanHablemos
} from "./Contacto";
export default {
  name: "Contact",
  props: {
    msg: String
  },
  components: {
    Container,
    "content-info": ContentInfo,
    "p-info-contact": PInfoContact,
    "h1-contact": h1Contact,
    "h4-contact": h4Contact,
    "form-contact": FormContact,
    "input-contact": InputContact,
    "button-contact": ButtonContact,
    "span-hab": SpanHablemos
  },
  data: function() {
    return {
      showForm: false,
      showMessage: true
    };
  },
  methods: {
    changeVisibility: function () {
      return (this.showForm = !this.showForm) & (this.showMessage = !this.showMessage);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
