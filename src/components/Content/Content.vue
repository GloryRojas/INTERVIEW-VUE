<template>
  <container-img :url="img">
    <container-in>
      <text-primary>{{ msg }}</text-primary>
      <text-secundary>{{ msg2 }}</text-secundary>
    </container-in>
  </container-img>
</template>

<script>
import { TextPrimary, TextSecundary, Container, containerIn } from "./Utils";
export default {
  name: "Content",
  components: {
    "text-primary": TextPrimary,
    "text-secundary": TextSecundary,
    "container-img": Container,
    "container-in": containerIn
  },
  props: {
    msg: String,
    msg2: String,
    img: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
