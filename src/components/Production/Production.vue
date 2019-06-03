<template>
  <cont-produccion>
    <h1-gray>{{ msg }}</h1-gray>
    <parrafo>
      Nuevas aplicaciones al contenido multimedia por medio de drones. Monitoreo
      e inspecciones de infraestructuras, promoción de servicios, registro de
      eventos, producciones personales.
    </parrafo>
    <block-opcion>
      <opcion
        src="https://user-images.githubusercontent.com/45070947/58756460-af3a5880-84be-11e9-874e-d9cfc618c500.jpg"
      />
      <h5-gray>FOTOS</h5-gray>
    </block-opcion>
    <block-opcion>
      <opcion
        src="https://user-images.githubusercontent.com/45070947/58756328-0854bd00-84bc-11e9-88d6-8ae5d686aa50.jpg"
      />
      <h5-gray>VIDEOS</h5-gray>
    </block-opcion>
    <block-opcion>
      <opcion
        src="https://user-images.githubusercontent.com/45070947/58756329-0ab71700-84bc-11e9-8e92-605272947aca.jpg"
      />
      <h5-gray>EN VIVO</h5-gray>
    </block-opcion>
  </cont-produccion>
</template>

<script>
import {
  ContProduccion,
  h1Gray,
  parrafo,
  opcion,
  h5Gray,
  BlockOpcion
} from "./Produccion";
export default {
  name: "Production",
  props: {
    msg: String
  },
  components: {
    "cont-produccion": ContProduccion,
    "h1-gray": h1Gray,
    parrafo,
    opcion,
    "h5-gray": h5Gray,
    BlockOpcion
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
