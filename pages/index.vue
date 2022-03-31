<template>
  <div id="contenido">
    <portada></portada>
    <v-container>
      <!-- <Aviso
        texto="Por fase 2 de COVID-19 en la región Metropolitana, se atenderá sólo en la V Región, Chile."
      ></Aviso> -->
      <tratamientos></tratamientos>
      <informacion></informacion>
      <convenios></convenios>
    </v-container>
    <Contacto></Contacto>
  </div>
</template>

<script>
import Portada from "~/components/Portada";
import Aviso from "~/components/Aviso";
import Contacto from "~/components/Contacto";
import Convenios from "~/components/Convenios";
import Informacion from "~/components/Informacion";
import Tratamientos from "~/components/Tratamientos";

export default {
  components: { Portada, Contacto, Convenios, Informacion, Tratamientos },
};
</script>

<style lang="sass">
#contenido
  background-color: #fafafa
  margin-top: -64px
  max-width: 1366px
</style>