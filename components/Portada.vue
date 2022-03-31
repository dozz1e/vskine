
<template>
  <div id="portada">
    <v-img
      sizes="(max-width: 1904px) 100vw, 1904px"
      :src="`/images/fondo.${extension}`"
      :srcset="`/images/fondo_600.${extension} 960w, /images/fondo_960.${extension} 1264w, /images/fondo_1264.${extension} 1904w`"
      alt="Portada VSKinesiologia"
      height="100%"
      width="100%"
      position="bottom"
    ></v-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Portada",
  computed: {
    ...mapGetters(["extension"]),
  },
};
</script>

<style lang="sass">
#portada
  height: 350px
  @media (min-width: 960px)
    height: 100vh
</style>

