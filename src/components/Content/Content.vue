<template>
  <container-img :url="img">
    <text-primary>{{ msg }}</text-primary>
    <text-secundary>{{ msg2 }}</text-secundary>
  </container-img>
</template>

<script>
import { TextPrimary, TextSecundary, Container } from "./Utils";
export default {
  name: "Content",
  components: {
    "text-primary": TextPrimary,
    "text-secundary": TextSecundary,
    "container-img": Container
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
